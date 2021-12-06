import { useEffect, useRef, useState } from 'react';
import Fetcher from '@/lib/fetcher';
import { MATRIX_ADDITION } from '@/lib/endpoints';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import Solver from '@/layouts/Solver';
import { ADDITION } from '@/data/matrixPages';

export default function ADDITIONJS({ ADDITION }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Something Went Wrong');
  const [matrixA, setMatrixA] = useState('1 2\n3 4');
  const [matrixB, setMatrixB] = useState('4 7\n3 1');
  const [solution, setSolution] = useState(false);
  const [timeStamp, setTimeStamp] = useState(false);
  const dummyScrollUP = useRef();

  const FindAnswerHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    var matrixNumbers1 = [];
    var matrixNumbers2 = [];
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (document.getElementById(i + '' + j) !== null) {
          matrixNumbers1.push(
            Number(document.getElementById(i + '' + j).value)
          );
        }
      }
    }
    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (document.getElementById('2' + i + '' + j) !== null) {
          matrixNumbers2.push(
            Number(document.getElementById('2' + i + '' + j).value)
          );
        }
      }
    }

    const creationTime = new Date().toISOString();
    var POST_QUESTION = {
      A: matrixNumbers1,
      B: matrixNumbers2
    };
    Fetcher(MATRIX_ADDITION, {
      createdAt: creationTime,
      question: POST_QUESTION
    })
      .then((res) => {
        setSolution(res);
        setTimeStamp(creationTime);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        setIsError(true);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    function mathTypeSet() {
      try {
        MathJax.typesetPromise();
      } catch (e) {
        console.log('Retrying to Set Math Format');
        setTimeout(() => {
          mathTypeSet();
        }, 2000);
      }
    }
    mathTypeSet();
  }, []);

  const exampleQuestionHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Solver
      data={ADDITION}
      solution={solution}
      timeStamp={timeStamp}
      exampleQuestionHandler={exampleQuestionHandler}
    >
      <div ref={dummyScrollUP} className="flex self-center justify-center">
        <form className="grid text-center w-10/12 lg:w-8/12">
          
            <div className="flex justify-center">
              <div className="grid">
                <span>Matrix A</span>
                <textarea
                  id="question"
                  className=" h-28 w-32 border border-solid p-2 outline-none rounded-lg resize-none border-t-0 border-b-0 border-black"
                  placeholder="Enter Question here"
                  value={matrixA}
                  onChange={(event) => {
                    setMatrixA(event.target.value);
                  }}
                ></textarea>
              </div>
              <div className="flex h-auto">
                <div className="m-auto">X</div>
              </div>
              <div className="grid">
                <span>Matrix B</span>
                <textarea
                  id="question"
                  className=" h-28 w-32 border border-solid p-2 outline-none rounded-lg resize-none border-t-0 border-b-0 border-black"
                  placeholder="Enter Question here"
                  value={matrixB}
                  onChange={(event) => {
                    setMatrixB(event.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          
          {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <button
            type="button"
            aria-label="solve problem"
            className="py-2 px-2 mx-1 mt-4 text-gray-900 font-semibold rounded-md sm:py-2 sm:px-2 bg-gray-200 hover:bg-gray-100"
            style={{ textAlign: '-webkit-center' }}
            onClick={FindAnswerHandler}
          >
            {isLoading ? <LoadingSpinner /> : 'Solve'}
          </button>
        </form>
      </div>
    </Solver>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ADDITION
    }
  };
}

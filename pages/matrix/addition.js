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
  const [solution, setSolution] = useState(false);
  const [question, setQuestion] = useState('2x+5y=16\n3x+y=11');
  const fixtextarea = useRef();
  const dummyScrollUP = useRef();

  const [matrixGrid, setMatrixGrid] = useState(2);
  var matrixDict = {};
  var matrixDict2 = {};

  const FindAnswerHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    var matrixNumbers1 = [];
    Object.entries(matrixDict)
      .sort(([a], [b]) => a - b)
      .filter((a, b) => matrixNumbers1.push(Number(a[1])));

    var matrixNumbers2 = [];
    Object.entries(matrixDict2)
      .sort(([a], [b]) => a - b)
      .filter((a, b) => matrixNumbers2.push(Number(a[1])));

    var POST_QUESTION = {
      "A":matrixNumbers1,
      "B":matrixNumbers2
    }
    Fetcher(MATRIX_ADDITION, {
      createdAt: new Date().toISOString(),
      question: POST_QUESTION
    })
      .then((res) => {
        setSolution(res);
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

  const matrix = Array.apply(null, Array(matrixGrid)).map(function (x, i) {
    const col = Array.apply(null, Array(matrixGrid)).map(function (y, j) {
      return (
        <input
          key={j}
          id={`${i}${j}`}
          onChange={(e) => {
            matrixDict[e.target.id] = e.target.value;
          }}
          className=" border border-gray-700 outline-none appearance-none mx-1 my-1 w-8 px-1 rounded "
        ></input>
      );
    });
    return <div key={i}>{col}</div>;
  });

  const matrix2 = Array.apply(null, Array(matrixGrid)).map(function (x, i) {
    const col = Array.apply(null, Array(matrixGrid)).map(function (y, j) {
      return (
        <input
          key={j}
          id={`${i}${j}`}
          onChange={(e) => {
            matrixDict2[e.target.id] = e.target.value;
          }}
          className=" border border-gray-700 outline-none appearance-none mx-1 my-1 w-8 px-1 rounded "
        ></input>
      );
    });
    return <div key={i}>{col}</div>;
  });

  const exampleQuestionHandler = (event) => {event.preventDefault();};

  return (
    <Solver
      data={ADDITION}
      solution={solution}
      question={question}
      exampleQuestionHandler={exampleQuestionHandler}
    >
      <div ref={dummyScrollUP} className="flex self-center justify-center">
        <form className="grid text-center w-10/12 lg:w-8/12">
          <label>Enter Equations line by line like</label>
          {matrixGrid && (
            <div className="flex justify-center">
              <div>{matrix}</div>
              <div className="flex h-auto">
                <div className="m-auto">`xx`</div>
              </div>
              <div>{matrix2}</div>
            </div>
          )}
          <div className="mt-1 m-auto relative w-3/6">
            <select
              id="matrixGrid"
              onChange={(e) => {
                setMatrixGrid(e.target.selectedIndex + 2);
              }}
              className="block appearance-none w-full border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option>2x2</option>
              <option>3x3</option>
              <option>4x4</option>
            </select>
            <div className="absolute flex inset-y-0 items-center px-3 right-0 text-white bg-blue-600 rounded-r pointer-events-none">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
          </div>
          <label htmlFor="matrixGrid">Change Matrix Grid</label>
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

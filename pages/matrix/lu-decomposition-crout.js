import { useEffect, useRef, useState } from 'react';
import Fetcher from '@/lib/fetcher';
import { MATRIX_LUCROUT } from '@/lib/endpoints';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import Solver from '@/layouts/Solver';
import { LUCROUT } from '@/data/matrixPages';

export default function LuCrout({ LUCROUT }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("Something Went Wrong")
  const [solution, setSolution] = useState(false);
  const [question, setQuestion] = useState('2x+5y=16\n3x+y=11');
  const [timeStamp, setTimeStamp] = useState(false);
  const fixtextarea = useRef();
  const dummyScrollUP = useRef();

  const FindAnswerHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const creationTime = new Date().toISOString();
    let POST_QUESTION = question;
    POST_QUESTION = POST_QUESTION.trim();
    if (
      POST_QUESTION.split('=').length === 3 ||
      POST_QUESTION.split('=').length === 4
    ) {
      Fetcher(MATRIX_LUCROUT, {
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
    }else{
      setIsError(true);
      setIsLoading(false);
      setErrorMessage("Question Not in Correct Format");
    }
  };

  useEffect(() => {
    fixtextarea.current.value = '2x+5y=16\n3x+y=11';
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
    setQuestion(
      LUCROUT.exampleQuestions[Number(event.target.id.replace('q', ''))].value
    );
    dummyScrollUP.current.scrollIntoView({ behavior: 'smooth' });
    fixtextarea.current.focus();
  };

  return (
    <Solver
      data={LUCROUT}
      solution={solution}
      timeStamp={timeStamp}
      exampleQuestionHandler={exampleQuestionHandler}
    >
      <div className="flex self-center justify-center">
        <form className="grid text-center w-10/12 lg:w-8/12">
          <label htmlFor="question">Enter Equations line by line like</label>
          <textarea
            id="question"
            className=" bg-yellow-200 h-28 border-4 border-solid p-2 outline-none rounded focus:border-red-300"
            placeholder="Enter Question here"
            value={question}
            ref={fixtextarea}
            onChange={(event)=>{setQuestion(event.target.value)}}
          ></textarea>
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
      LUCROUT
    }
  };
}

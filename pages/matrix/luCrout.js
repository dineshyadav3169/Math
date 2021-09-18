import Container from '@/components/Container';
import Solution from '@/layouts/Solution';
import { useState } from 'react';
import Fetcher from '@/lib/fetcher';
import { MATRIX_LUCROUT } from '@/lib/endpoints';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import PrevNext from '@/components/PrevNext'

export default function LuCrout() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [solution, setSolution] = useState(false);
  const [question, setQuestion] = useState('2x+5y=16\n3x+y=11');

  const FindAnswerHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let POST_DATA;
    try {
      let equationsLength = question.split('\n').length;
      if (equationsLength === 3) {
        if (question.split('\n')[2] === '') {
          equationsLength--;
        }
      }
      if (equationsLength === 2) {
        let equations = question
          .replaceAll('x+', ',')
          .replaceAll('y=', ',=')
          .split('\n');
        POST_DATA = {
          A: [
            equations[0]
              .split(',=')[0]
              .split(',')
              .map(function (item) {
                return parseInt(item, 10) || 1;
              }),
            equations[1]
              .split(',=')[0]
              .split(',')
              .map(function (item) {
                return parseInt(item, 10) || 1;
              })
          ],
          B: [
            Number(equations[0].split(',=')[1].split(',')[0]),
            Number(equations[1].split(',=')[1].split(',')[0])
          ]
        };
      } else {
        let equations = question
          .replaceAll('x+', ',')
          .replaceAll('y+', ',')
          .replaceAll('z=', ',=')
          .split('\n');
        POST_DATA = {
          A: [
            equations[0]
              .split(',=')[0]
              .split(',')
              .map(function (item) {
                return parseInt(item, 10) || 1;
              }),
            equations[1]
              .split(',=')[0]
              .split(',')
              .map(function (item) {
                return parseInt(item, 10) || 1;
              }),
            equations[2]
              .split(',=')[0]
              .split(',')
              .map(function (item) {
                return parseInt(item, 10) || 1;
              })
          ],
          B: [
            Number(equations[0].split(',=')[1].split(',')[0]),
            Number(equations[1].split(',=')[1].split(',')[0]),
            Number(equations[2].split(',=')[1].split(',')[0])
          ]
        };
      }
    } catch (e) {
      console.log(e)
      setIsError(true);
    }
    Fetcher(MATRIX_LUCROUT, {createdAt: new Date().toISOString() ,...POST_DATA})
      .then((res) => {
        setSolution(res);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((e) => {
        console.log(e)
        setIsError(true);
      });
  };

  return (
    <Container
      title="LU decomposition Crout luCrout"
      description="LU decomposition Crout luCrout"
    >
      <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-1 text-black">
      LU decomposition using Crout's method
      </h1>
      <PrevNext prevoiusLink='/' nextLink='/'/>
      <div className="flex self-center justify-center">
        <div className="grid text-center">
          <label htmlFor="question">Enter Equations line by line like</label>
          <textarea
            id="question"
            className=" bg-yellow-300 border-4 border-solid p-2 outline-none rounded focus:border-red-300"
            placeholder="Enter Question here"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          ></textarea>
          {isError && <ErrorMessage>InValid Entry</ErrorMessage>}
          <button
            type="button"
            aria-label="solve problem"
            className="py-2 px-2 mx-1 mt-4 text-gray-900 rounded-md sm:py-2 sm:px-2 bg-gray-200 hover:bg-gray-100"
            onClick={FindAnswerHandler}
          >
            {isLoading ? <LoadingSpinner /> : 'Solve'}
          </button>
        </div>
      </div>
      {solution && (
        <Solution
          question={question}
        >
          {solution}
        </Solution>
      )}
    </Container>
  );
}

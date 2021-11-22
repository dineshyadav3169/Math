import Container from '@/components/container/Container';
import PrevNext from '@/components/PrevNext';
import { useEffect, useRef, useState } from 'react';
import Solution from './Solution';
import ExampleCard from '@/components/ExampleCard';
import ShareCard from '@/components/ShareCard';
import FormulaCard from '@/components/FormulaCard';

export default function Solver({
  data,
  exampleQuestionHandler,
  solution,
  timeStamp,
  children
}) {
  const [currentTab, setcurrentTab] = useState('example');
  const dummyScrollView = useRef();

  let linkArray = [];
  data.slideData.map((t) => {
    t.slideNavData.map((u) => {
      linkArray.push(u.link);
    });
  });

  const i = linkArray.indexOf(data.currentPage);
  const previousLink = linkArray[i == 0 ? linkArray.length : i - 1] || false;
  const nextLink =
    linkArray[i == linkArray.length - 1 ? linkArray.length : i + 1] || false;

  useEffect(() => {
    if (solution !== false) {
      setcurrentTab('solution');
      dummyScrollView.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [solution]);

  return (
    <Container
      title={data.pageTitle}
      description={data.pageDescription}
      hasSlideContent={true}
      slideContent={data.slideData}
    >
      <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-1 text-black">
        {data.heading}
      </h1>
      <PrevNext prevoiusLink={previousLink} nextLink={nextLink} />
      {children}

      <div
        ref={dummyScrollView}
        role="tablist"
        className={`mt-10 text-left sm:px-12 w-full`}
      >
        <button
          className={`border-b-2 ${
            currentTab === 'solution'
              ? 'border-blue-600 text-blue-600'
              : 'border-gray-200'
          } relative py-3 px-5 transition duration-300 ease-in-out hover:bg-blue-50 w-6/12 cursor-pointer`}
          role="tab"
          id="t1"
          aria-selected={currentTab === 'solution'? "true": "false"}
          tabIndex="-1"
          aria-controls="tab-1-pane"
          onClick={() => {
            setcurrentTab('solution');
          }}
          active={currentTab === 'solution'? "true": "false"}
        >
          Solution
        </button>
        <button
          className={`border-b-2 ${
            currentTab === 'example'
              ? 'border-blue-600 text-blue-600'
              : 'border-gray-200'
          } relative py-3 px-5 transition duration-300 ease-in-out hover:bg-blue-50 w-6/12 cursor-pointer`}
          role="tab"
          id="t2"
          aria-selected={currentTab === 'example'? "true": "false"}
          aria-controls="tab-2-pane"
          onClick={() => {
            setcurrentTab('example');
          }}
          active={currentTab === 'example'? "true": "false"}
        >
          Details
        </button>
      </div>

      {currentTab === 'solution' ? (
        <div
          id="tab-1-pane"
          role="tabpanel"
          aria-hidden="true"
          aria-describedby="t1"
        >
          {solution !== false ? (
            <Solution timeStamp={timeStamp}>{solution}</Solution>
          ) : (
            <p>Your solution will appear here.</p>
          )}
        </div>
      ) : (
        <div
          id="tab-2-pane"
          role="tabpanel"
          aria-hidden="false"
          aria-describedby="t2"
        >
          <ExampleCard
            exampleQuestions={data.exampleQuestions}
            exampleQuestionHandler={exampleQuestionHandler}
          />
          <FormulaCard 
            formulaList={data.formula}
          />
        </div>
      )}
      <ShareCard
        currentPage={data.currentPage}
        subDirectory={data.subDirectory}
      />
    </Container>
  );
}

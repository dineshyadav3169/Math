import Container from '@/components/container/Container';
import PrevNext from '@/components/PrevNext';
import { useEffect, useRef, useState } from 'react';
import Solution from './Solution';

export default function Solver({
  pageTitle,
  pageDescription,
  heading,
  slideData,
  currentPage,
  solution,
  question,
  children
}) {
  const [currentTab, setcurrentTab] = useState('example');
  const dummyScrollView = useRef();

  let linkArray = [];
  slideData.map((t) => {
    t.slideNavData.map((u) => {
      linkArray.push(u.link);
    });
  });

  const i = linkArray.indexOf(currentPage);
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
      title={pageTitle}
      description={pageDescription}
      hasSlideContent={true}
      slideContent={slideData}
    >
      <h1 className="font-bold text-xl md:text-3xl tracking-tight mb-4 mt-1 text-black">
        {heading}
      </h1>
      <PrevNext prevoiusLink={previousLink} nextLink={nextLink} />
      {children}

      <div role="tablist" className={`mt-10 text-left sm:px-12`}>
        <ul ref={dummyScrollView} className="list-none w-full">
          <li className="inline-block w-6/12">
            <div
              id="t1"
              tabIndex="0"
              role="tab"
              aria-selected="false"
              aria-controls="t1-panel"
              className="cursor-pointer text-center"
              onClick={() => {
                setcurrentTab('solution');
              }}
            >
              <div
                className={`border-b-2 ${
                  currentTab === 'solution'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-gray-200'
                } relative py-3 px-5 transition duration-300 ease-in-out hover:bg-blue-50`}
              >
                <span className="">Solution</span>
              </div>
            </div>
          </li>
          <li className="inline-block w-6/12">
            <div
              id="t2"
              tabIndex="-1"
              role="tab"
              aria-selected="true"
              aria-controls="t2-panel"
              className="cursor-pointer text-center"
              onClick={() => {
                setcurrentTab('example');
              }}
            >
              <div
                className={`border-b-2 ${
                  currentTab === 'example'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-gray-200'
                } relative py-3 px-5 transition duration-300 ease-in-out hover:bg-blue-50`}
              >
                <span className="">Examples</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {currentTab === 'example' ? (
        <div
          id="t2-panel"
          role="tabpanel"
          aria-hidden="false"
          aria-describedby="t2"
        >
          These are examples
        </div>
      ) : (
        <div
          id="t1-panel"
          role="tabpanel"
          aria-hidden="true"
          aria-describedby="t1"
        >
          {solution ? (
            <Solution question={question}>{solution}</Solution>
          ) : (
            <p>Your solution will appear here.</p>
          )}
        </div>
      )}
    </Container>
  );
}

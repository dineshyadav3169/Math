import Container from '@/components/container/Container';
import PrevNext from '@/components/PrevNext';
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

      <div role="tablist" className="mt-10 text-left">
        <ul className="list-none">
          <li className="inline-block">
            <div
              id="t1"
              tabIndex="0"
              role="tab"
              aria-selected="true"
              aria-controls="t1-panel"
              className="cursor-pointer"
            >
              <div className="border-b-2 border-blue-500 relative py-3 px-5">
                  <span className="">Solution</span>
              </div>
            </div>
          </li>
          <li className="inline-block">
            <div
              id="t2"
              tabIndex="-1"
              role="tab"
              aria-selected="false"
              aria-controls="t2-panel"
              className="cursor-pointer"
            >
              <div className="relative py-3 px-5">
                  <span className="FancyTabs-tabText">Examples</span>
              </div>
            </div>
          </li>
        </ul>
        <hr className="border-2 border-gray-200  w-full" />
      </div>
      
      {solution && <Solution question={question}>{solution}</Solution>}

    </Container>
  );
}

import Container from '@/components/container/Container';
import PrevNext from '@/components/PrevNext';

export default function Solver({ pageTitle, pageDescription, heading, slideData, currentPage, children}) {
  
  let linkArray = []
  slideData.map(
    t=>{
      t.slideNavData.map((u)=>{
        linkArray.push(u.link)
      })
    }
  )

  const i=linkArray.indexOf(currentPage);
  const previousLink=linkArray[i==0?linkArray.length:i-1] || false;
  const nextLink=linkArray[i==linkArray.length-1?linkArray.length:i+1] || false;

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
    </Container>
  );
}

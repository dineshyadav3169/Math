import HomeContainer from '@/components/HomeContainer';
import FunctionCard from '@/components/FunctionCard';

export default function Blog() {
  return (
    <HomeContainer
      title="Home - Math"
      description="Math problems solved step by step"
    >
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        Problem types
      </h1>
      <p className="text-gray-600 mb-4">
        Select the type of problem that you want to Solve.
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
        <FunctionCard
          key="test0001"
          title="Matrix"
          hasImage={true}
          imageLogo="matrix.svg"
          slug="matrix"
          description="Solve Matrix Problem"
        />
      </div>
    </HomeContainer>
  );
}

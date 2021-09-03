import Container from '@/components/Container';
import FunctionCard from '@/components/FunctionCard';

export default function Blog() {
  return (
    <Container
      title="Home - Math"
      description="Math problems solved step by step"
    >
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        Who are we?
      </h1>
      <p className="text-gray-600 mb-4">
        We are a Math Orgination, using our website you can find solution to
        every problem step by step.
      </p>
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        Problem types
      </h1>
      <p className="text-gray-600 mb-4">
        Below are the types of problem that we can solve.
      </p>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
        <FunctionCard
          key="test0001"
          title="Matrix"
          hasImage={false}
          slug="matrix"
          description="Solve Matrix Problem"
        />
        <FunctionCard
          key="test0002"
          title="Algebra"
          hasImage={false}
          slug="algebra"
          description="Solve Algebra Problem"
        />
      </div>
    </Container>
  );
}

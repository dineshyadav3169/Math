import HomeContainer from '@/components/HomeContainer';

export default function About() {
  return (
    <HomeContainer>
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        About
      </h1>
      <p>The website is designed to provide online math solutions to students of all levels. We take each step of the problem solving process seriously, so that you can understand the concepts and get the best results.</p>
      <br />
      <p>MathSolveOnline.com website provides step-by-step solutions to math problems. We cover a wide range of topics, from basic operations to more complex problems. </p>
      <h2 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black">
        Mission
      </h2>
      <p>Our mission is to provide students with a <strong>step-by-step solution to every math problem</strong> they encounter. We believe that with a little bit of help, anyone can become a math genius!</p>
      <br />
      <p>We aim to provide a solution for every math problem, big or small. We understand that math can be difficult, so we aim to make our solutions easy to understand and follow. We hope that the website will be a helpful resource for students and teachers.</p>      
    </HomeContainer>
  );
}

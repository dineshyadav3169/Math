import HomeContainer from '@/components/HomeContainer';

export default function About() {
  return (
    <HomeContainer>
      <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black ">
        About
      </h1>
      <p>This is the about page</p>
      <h2 className="font-bold text-xl md:text-2xl tracking-tight mb-4 mt-8 text-black">
        Mission
      </h2>
      <p>Provide Solution to every <strong>Mathematical</strong> problem <strong>Step by Step</strong></p>
      
    </HomeContainer>
  );
}

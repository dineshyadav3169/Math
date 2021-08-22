import Container from '@/components/Container';

export default function Blog({ posts }) {
  return (
    <Container
      title="Home - Strategy to Invest"
      description="Personal finance blog - that includes financial life, insurance, and investment in stock market, real estate, mutual funds, cryptocurrency and future"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Most Popular
        </h3>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Newsletter
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          My newsletter provides a behind-the-scenes look into what I'm working
          on and writing about. I frequently share some of my best articles I've
          read.
        </p>
      </div>
    </Container>
  );
}

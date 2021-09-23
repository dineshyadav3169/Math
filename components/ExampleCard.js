export default function ExampleCard({
  exampleQuestions,
  exampleQuestionHandler
}) {
  return (
    <div className="text-left shadow-md my-4 mx-2 p-4 rounded-md">
      <h3 className=" text-lg font-medium mb-1">Questions</h3>
      <div className="text-indigo-800 grid">
        {exampleQuestions.map((question) => (
          <span
            key={question.id}
            className="my-1 hover:underline hover:text-indigo-500 cursor-pointer"
            id={question.id}
            onClick={exampleQuestionHandler}
          >
            {question.question}
          </span>
        ))}
      </div>
    </div>
  );
}

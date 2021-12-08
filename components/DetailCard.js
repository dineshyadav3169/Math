import { useEffect } from 'react';

export default function DetailCard({
  detailList,
  exampleQuestions,
  exampleQuestionHandler
}) {
  useEffect(() => {
    function mathTypeSet() {
      try {
        MathJax.typesetPromise();
      } catch (e) {
        console.log('Retrying to Set Math Format');
        setTimeout(() => {
          mathTypeSet();
        }, 2000);
      }
    }
    mathTypeSet();
  });
  return (
    <>
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
              {question.question
                .replace('**', '`')
                .replace('**', '`')
                .replace('**', '`')
                .replace('**', '`')}
            </span>
          ))}
        </div>
      </div>
      {detailList.map((detail) => (
      <div className="text-left shadow-md my-4 mx-2 p-4 rounded-md" key={detail.key}>
        <h3 className=" text-lg font-medium mb-1">{detail.detailTitle}</h3>
        <div className="grid">
            {detail.data.map((detailItem) => (
            <span
              key={detailItem.id}
              className="my-1"
              id={detailItem.id}
            >
              {detailItem.detail
                .replace('**', '`')
                .replace('**', '`')
                .replace('**', '`')
                .replace('**', '`')}
              </span>
            ))}        
        </div>
      </div>
      ))}
    </>
  );
}

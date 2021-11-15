export default function FormulaCard({formulaList}) {
  return(
    <div className="text-left shadow-md my-4 mx-2 p-4 rounded-md">
      <h3 className=" text-lg font-medium mb-1">Formula Used</h3>
      <div className="text-indigo-800 grid">
        {formulaList.map((formula) => (
          <span
            key={formula.id}
            className="my-1 hover:underline hover:text-indigo-500"
            id={formula.id}
          >
            `{formula.formula}`
            
          </span>
        ))}
      </div>
    </div>
  )
}
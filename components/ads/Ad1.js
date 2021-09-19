import React from "react";

function Ad1() {
  console.log("add in called")
  return (
    <div className=" bg-green-200 text-black py-8 mx-8">This is an Ad</div>
  );
}
export default React.memo(Ad1)
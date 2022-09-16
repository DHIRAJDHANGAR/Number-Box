import { useState } from "react";

const DisplayInputBox = ({ data }) => {
  const [showResult, setShowResult] = useState(false);
  const [num, setNum] = useState(0);
  //handle to display input box
  const displayInput = [];
  for (let i = 1; i <= data; i++) {
    // displayInput.push(i);
    const boxElem = { id: i, numVal: num };
    displayInput.push(boxElem);
  }
  console.log("LN13: ", displayInput);
  console.log("Num: ", num);
  if (
    data > 10 &&
    data !== 0 &&
    data !== "" &&
    data !== null &&
    data !== undefined
  ) {
    return alert("Number in between 1 to 10");
  }

  const handleAddValues = () => {
    setShowResult(true);
  };
  return (
    <>
      <div className="row g-3">
        {displayInput.map((item) => {
          return (
            <>
              <div className="col" key={item.id}>
                <input
                  type="number"
                  className="form-control"
                  aria-label="First name"
                />
              </div>
            </>
          );
        })}
      </div>
      <div className="col-12">
        <button className="btn btn-primary" onClick={handleAddValues}>
          ADD
        </button>
      </div>
      <div>{showResult ? <div>Result</div> : <div>Invalid</div>}</div>
    </>
  );
};
export default DisplayInputBox;

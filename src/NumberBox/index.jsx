import { useState } from "react";
import DisplayInputBox from "./indexV2";

const NumberBox = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [showBox, setShowBox] = useState(false);
  //to handle input valid
  const handleCreateBox = () => {
    if (
      inputNumber !== 0 &&
      inputNumber !== "" &&
      inputNumber !== null &&
      inputNumber !== undefined
    ) {
      return setShowBox(true);
    }
    return alert("Number in between 1 to 10");
  };

  return (
    <>
      <div className="mb-3">
        <label className="form-label">Create Number Box</label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={inputNumber}
          onChange={(e) => {
            setInputNumber(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-primary" onClick={handleCreateBox}>
        Create
      </button>
      <div className="displayBox">
        {showBox ? <DisplayInputBox data={inputNumber} /> : <div></div>}
      </div>
    </>
  );
};
export default NumberBox;

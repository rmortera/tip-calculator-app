import { useState } from "react";
import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import OutPut from "./OutPut";
import Reset from "./Reset";

function TipCalculator() {
  const [billInput, setBillInput] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [tip, setTip] = useState(0);

  function handleReset() {
    setBillInput("");
    setTip(0);
  }

  return (
    <div className="container">
      <div className="bill-container">
        {" "}
        <BillInput
          bill={billInput}
          setBillInput={setBillInput}
          numPeople={numPeople}
          setNumPeople={setNumPeople}
        />
      </div>
      <div className="tip-container">
        <SelectPercentage bill={billInput} tip={tip} onTip={setTip} />
        <OutPut tip={tip} bill={billInput} numPeople={numPeople} />
        <Reset onReset={handleReset} bill={billInput} />
      </div>
    </div>
  );
}

export default TipCalculator;

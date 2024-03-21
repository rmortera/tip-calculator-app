function OutPut({ bill, tip, numPeople }) {
  const billPerPeople = bill / numPeople;
  const totalTip = (tip * billPerPeople) / 100;
  const total = bill + totalTip;

  return (
    <div className="output">
      <div>
        <p>
          Tip amount <span>/ person</span>
        </p>
        <span>
          <strong>${numPeople > 0 ? Math.ceil(totalTip) : "0"}</strong>
        </span>
      </div>

      <div>
        <p>
          {" "}
          Total <span>/ person</span>
        </p>
        <span>
          <strong>${numPeople > 0 ? Math.ceil(total) : "0"}</strong>
        </span>{" "}
      </div>
    </div>
  );
}

export default OutPut;

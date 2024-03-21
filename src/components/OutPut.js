function OutPut({ bill, tip, numPeople }) {
  const billPerPeople = Math.ceil(bill / numPeople);
  const amountPerPerson = Math.ceil(
    (billPerPeople * tip) / 100 + billPerPeople
  );
  const totalTip = Math.ceil((tip * billPerPeople) / 100);
  const total = amountPerPerson * numPeople;

  return (
    <div className="output">
      <div>
        <p>
          Tip <span>/ person</span>
        </p>
        <span>
          <strong>${numPeople > 0 ? totalTip : "0"}</strong>
        </span>
      </div>

      <div>
        <p>
          {" "}
          Amount <span>/ person</span>
        </p>
        <span>
          <strong>${numPeople > 0 ? Math.ceil(amountPerPerson) : "0"}</strong>
        </span>{" "}
      </div>

      <div>
        <p> Total</p>
        <span>
          <strong>${numPeople > 0 ? Math.ceil(total) : "0"}</strong>
        </span>{" "}
      </div>
    </div>
  );
}

export default OutPut;

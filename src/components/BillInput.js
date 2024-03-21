function BillInput({ bill, setBillInput, numPeople, setNumPeople }) {
  return (
    <div className="select-bill">
      <h4>Bill </h4>
      <div className="bill-input">
        <input
          type="text"
          onKeyPress={(e) => {
            if (!/[0-9]/.test(e.key)) {
              e.preventDefault();
            }
          }}
          placeholder="0"
          value={bill}
          onChange={(e) => setBillInput(Number(e.target.value))}
        ></input>
      </div>

      <p>
        <svg
          width="14px"
          height="14px"
          strokeWidth="1.5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#495057"
        >
          <path
            d="M5 20V19C5 15.134 8.13401 12 12 12V12C15.866 12 19 15.134 19 19V20"
            stroke="#495057"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
            stroke="#495057"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>{" "}
        Number of people{" "}
      </p>

      <input
        type="number"
        min="1"
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        placeholder="1"
        value={numPeople}
        onChange={(e) => setNumPeople(Number(e.target.value))}
      ></input>
      {numPeople < 1 ? (
        <p>
          At least one person is required to calculate the tip amount and total.
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default BillInput;

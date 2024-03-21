function SelectPercentage({ tip, onTip }) {
  return (
    <>
      <div className="select-tip">
        <h4>Select tip %</h4>
        <select
          className="bill"
          value={tip}
          onChange={(e) => onTip(Number(e.target.value))}
        >
          <option value="0">Dissatisfied (0%)</option>
          <option value="5">It was okay (5%)</option>
          <option value="10">It was good (10%)</option>
          <option value="20">Absolutely amazing! (20%)</option>
        </select>
      </div>
    </>
  );
}

export default SelectPercentage;

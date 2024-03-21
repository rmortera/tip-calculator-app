function Reset({ bill, onReset }) {
  return (
    <>
      {bill > 0 && (
        <button className="btnReset" onClick={onReset}>
          Reset
        </button>
      )}
    </>
  );
}

export default Reset;

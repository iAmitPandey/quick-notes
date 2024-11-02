const Square = (props) => {
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid",
        height: "100px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={props.onClick}
    >
      <h4>{props.value}</h4>
    </div>
  );
};

export default Square;

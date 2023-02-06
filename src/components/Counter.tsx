import { Fragment, useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const counterDisplayStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const buttonDisplayStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    marginBottom: "2rem",
  };

  const counterStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: "700",
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Fragment>
      <h1>Counter</h1>
      <div style={counterDisplayStyle}>
        <div style={buttonDisplayStyle}>
          <Button handleClick={increment} label="+" />
          <Button handleClick={decrement} label="-" />
        </div>
        <div style={counterStyle}>{count}</div>
      </div>
    </Fragment>
  );
};

export default Counter;

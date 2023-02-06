import { Fragment } from "react";
import DateTime from "./DateTime";

const Schedules = () => {
  const schedulesStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Fragment>
      <h1>Horaire</h1>
      <div style={schedulesStyle}>
        <DateTime city="Paris" timezone="Europe/Paris" />
        <DateTime city="Shangai" timezone="Asia/Shanghai" />
      </div>
    </Fragment>
  );
};

export default Schedules;

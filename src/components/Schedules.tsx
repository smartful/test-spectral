import { Fragment, useEffect, useState } from "react";

const Schedules = () => {
  const [parisDate, setParisDate] = useState(new Date());
  const [shanghaiDate, setShangaiDate] = useState(new Date());
  function refreshDate() {
    setParisDate(new Date());
  }

  useEffect(() => {
    const timeoutId = setInterval(() => refreshDate(), 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, [parisDate, shanghaiDate]);

  const schedulesStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Fragment>
      <h1>Horaire</h1>
      <div style={schedulesStyle}>
        <div>
          <strong>Paris :</strong> <span>{parisDate.toLocaleString()}</span>
        </div>
        <div>
          <strong>Shangai :</strong>{" "}
          <span>{shanghaiDate.toLocaleString()}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Schedules;

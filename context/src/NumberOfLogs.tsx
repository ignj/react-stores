import React, { useContext, useRef } from "react";
import { LogsContext } from "./LogsContext";

const NumberOfLogs = React.memo(() => {
  const { numberOfLogs } = useContext(LogsContext);
  const logsRenders = useRef(0);

  return (
    <div>
      <h1>NumberOfLogs component</h1>

      <div>NumberOfLogs: {numberOfLogs}</div>
      <div>NumberOfLogs renders: {logsRenders.current++}</div>
    </div>
  );
});

export default NumberOfLogs;

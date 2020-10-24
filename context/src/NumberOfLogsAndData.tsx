import React, { useContext, useRef } from "react";
import { LogsContext } from "./LogsContext";

const NumberOfLogsAndData = React.memo(() => {
  const { numberOfLogs, logData } = useContext(LogsContext);
  const logsAndDatarenders = useRef(0);

  return (
    <div>
      <h1>NumberOfLogs and LogData component</h1>

      <div>NumberOfLogs: {numberOfLogs}</div>
      <div>logData: {logData}</div>
      <div>NumberOfLogs renders: {logsAndDatarenders.current++}</div>
    </div>
  );
});

export default NumberOfLogsAndData;

import React, { useContext, useRef } from "react";
import { LogsContext } from "./LogsContext";

const NumberOfLogsAndData = React.memo(() => {
  const { numberOfLogs, logData } = useContext(LogsContext);
  const logsAndDatarenders = useRef(0);

  return (
    <div data-testid="container-number-of-logs-and-data">
      <h1>NumberOfLogs and LogData component</h1>

      <div data-testid="number-of-logs">NumberOfLogs: {numberOfLogs}</div>
      <div data-testid="log-data">logData: {logData}</div>
      <div>NumberOfLogs renders: {logsAndDatarenders.current++}</div>
    </div>
  );
});

export default NumberOfLogsAndData;

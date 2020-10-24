import { observer } from "mobx-react-lite";
import React, { useContext, useRef } from "react";
import { LogsStore } from "./LogsStore";

const NumberOfLogsAndData = () => {
  const { numberOfLogs, logData } = useContext(LogsStore);
  const logsAndDatarenders = useRef(0);

  return (
    <div>
      <h1>NumberOfLogs and LogData component</h1>

      <div>NumberOfLogs: {numberOfLogs}</div>
      <div>logData: {logData}</div>
      <div>NumberOfLogs renders: {logsAndDatarenders.current++}</div>
    </div>
  );
};

export default observer(NumberOfLogsAndData);

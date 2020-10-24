import { observer } from "mobx-react-lite";
import React, { useContext, useRef } from "react";
import { LogsStore } from "./LogsStore";

const NumberOfLogs = () => {
  const { numberOfLogs } = useContext(LogsStore);
  const logsRenders = useRef(0);

  return (
    <div>
      <h1>NumberOfLogs component</h1>

      <div>NumberOfLogs: {numberOfLogs}</div>
      <div>NumberOfLogs renders: {logsRenders.current++}</div>
    </div>
  );
};

export default observer(NumberOfLogs);

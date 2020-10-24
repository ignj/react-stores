import React, { useContext } from "react";
import { LogsStore } from "./LogsStore";
import NumberOfLogs from "./NumberOfLogs";
import NumberOfLogsAndData from "./NumberOfLogsAndData";

const App = () => {
  const { incrementNumberOfLogs, updateLogData } = useContext(LogsStore);

  return (
    <>
      <button onClick={() => incrementNumberOfLogs()}>Add new log</button>
      <button onClick={() => updateLogData()}>Update Log data</button>
      <NumberOfLogs />
      <NumberOfLogsAndData />
    </>
  );
}

export default App;

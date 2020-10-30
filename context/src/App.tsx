import React from "react";
import NumberOfLogs from "./NumberOfLogs";
import { LogsContext } from "./LogsContext";
import NumberOfLogsAndData from "./NumberOfLogsAndData";

function App() {
  const [numberOfLogs, setNumberOfLogs] = React.useState<number>(0);
  const [logData, setLogData] = React.useState("");

  return (
    <LogsContext.Provider
      value={{
        numberOfLogs,
        setNumberOfLogs,
        logData,
        setLogData,
      }}
    >
      <button
        data-testid="increment-logs"
        onClick={() => setNumberOfLogs((prev) => prev + 1)}
      >
        Add new log
      </button>
      <button
        data-testid="update-logs"
        onClick={() => setLogData((prev) => new Date().getTime().toString())}
      >
        Update Log data
      </button>
      <NumberOfLogs />
      <NumberOfLogsAndData />
    </LogsContext.Provider>
  );
}

export default App;

import React, { useRef } from "react";
import { connect } from "react-redux";
import { LogsState } from "./StoreManagement";

const NumberOfLogsAndData: React.FC<IProps> = ({ numberOfLogs, logData }) => {
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

const mapStateToProps = (state: LogsState) => ({
  numberOfLogs: state.numberOfLogs,
  logData: state.logData,
});

const mapDispatchToProps = () => {};

type IProps = ReturnType<typeof mapStateToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberOfLogsAndData);

import React from "react";
import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import NumberOfLogs from "./NumberOfLogs";
import NumberOfLogsAndData from "./NumberOfLogsAndData";
import {
  IReduxBaseAction,
  LogsState,
  incrementNumberOfLogs,
  updateLogData,
} from "./StoreManagement";

const App: React.FC<IProps> = ({ incrementNumberOfLogs, updateLogData }) => {
  return (
    <>
      <button
        data-testid="increment-logs"
        onClick={() => incrementNumberOfLogs()}
      >
        Add new log
      </button>
      <button data-testid="update-logs" onClick={() => updateLogData()}>
        Update Log data
      </button>
      <NumberOfLogs />
      <NumberOfLogsAndData />
    </>
  );
};

const mapStateToProps = (state: LogsState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<IReduxBaseAction>) =>
  bindActionCreators({ incrementNumberOfLogs, updateLogData }, dispatch);

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(App);

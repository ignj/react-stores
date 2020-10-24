import React, { useRef } from "react";
import { connect } from "react-redux";
import { LogsState } from "./StoreManagement";

const NumberOfLogs: React.FC<IProps> = ({ numberOfLogs }) => {
  const logsRenders = useRef(0);

  return (
    <div>
      <h1>NumberOfLogs component</h1>

      <div>NumberOfLogs: {numberOfLogs}</div>
      <div>NumberOfLogs renders: {logsRenders.current++}</div>
    </div>
  );
};

const mapStateToProps = (state: LogsState) => ({
  numberOfLogs: state.numberOfLogs,
});

const mapDispatchToProps = () => {};

type IProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(NumberOfLogs);

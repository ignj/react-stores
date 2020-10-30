import React, { useContext } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { renderHook } from "@testing-library/react-hooks";
import { LogsStore } from "../LogsStore";

test("renders increment logs button", () => {
  render(<App />);
  const incrementLogsButton = screen.getByTestId("increment-logs");
  expect(incrementLogsButton).toBeInTheDocument();
});

test("renders update log data button", () => {
  render(<App />);
  const updateLogDataButton = screen.getByTestId("update-logs");
  expect(updateLogDataButton).toBeInTheDocument();
});

test("renders number of logs", () => {
  render(<App />);
  const numberOfLogsComponent = screen.getByTestId("container-number-of-logs");
  expect(numberOfLogsComponent).toBeInTheDocument();
});

test("renders numbers of logs and data", () => {
  render(<App />);
  const numberOfLogsComponent = screen.getByTestId(
    "container-number-of-logs-and-data"
  );
  expect(numberOfLogsComponent).toBeInTheDocument();
});

test("increment logs updates store", () => {
  render(<App />);
  const { result: context } = renderHook(() => useContext(LogsStore));
  const incrementLogsButton = screen.getByTestId("increment-logs");

  const initialCounter = context.current.numberOfLogs;
  expect(initialCounter).toBe(0);

  fireEvent.click(incrementLogsButton);

  const updatedCounter = context.current.numberOfLogs;
  expect(updatedCounter).toBe(1);
});

test("update logs updates store", () => {
  render(<App />);
  const { result: context } = renderHook(() => useContext(LogsStore));
  const updateLogDataButton = screen.getByTestId("update-logs");

  const initialData = context.current.logData;
  expect(initialData).toBe("");

  fireEvent.click(updateLogDataButton);

  const updatedData = context.current.logData;
  expect(updatedData).not.toEqual(initialData);
});

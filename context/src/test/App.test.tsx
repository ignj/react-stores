import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

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
  const incrementLogsButton = screen.getByTestId("increment-logs");

  const numberOfLogsContainer = screen.getByTestId("container-number-of-logs");
  const counter = within(numberOfLogsContainer).getByTestId("number-of-logs");
  expect(counter.textContent).toContain(0);

  fireEvent.click(incrementLogsButton);

  expect(counter.textContent).toContain(1);
});

test("update logs updates store", () => {
  render(<App />);
  const incrementLogsButton = screen.getByTestId("increment-logs");
  const updateLogsButton = screen.getByTestId("update-logs");

  /* Test the log counter */
  const numberOfLogsAndDataContainer = screen.getByTestId(
    "container-number-of-logs-and-data"
  );
  const counter = within(numberOfLogsAndDataContainer).getByTestId(
    "number-of-logs"
  );
  expect(counter.textContent).toContain(0);

  fireEvent.click(incrementLogsButton);

  expect(counter.textContent).toContain(1);

  /* Test log updater */
  const logData = within(numberOfLogsAndDataContainer).getByTestId("log-data");
  expect(logData.textContent).toBe("logData: ");

  fireEvent.click(updateLogsButton);

  expect(logData.textContent).not.toBe("logData: ");
});

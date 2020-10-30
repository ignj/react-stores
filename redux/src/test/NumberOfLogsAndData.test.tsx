import React from "react";
import { cleanup, render, RenderResult } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { LogsState } from "../StoreManagement";
import { Provider } from "react-redux";
import NumberOfLogsAndData from "../NumberOfLogsAndData";

const mockStore = configureStore([]);

let store: MockStoreEnhanced<unknown, {}>;
let component: RenderResult;

const setup = (state: LogsState) => {
  cleanup();

  store = mockStore(state);

  store.dispatch = jest.fn();

  component = render(
    <Provider store={store}>
      <NumberOfLogsAndData />
    </Provider>
  );
};

beforeEach(() => {
  const initialState = {
    numberOfLogs: 0,
    logData: "",
  };

  setup(initialState);
});

test("number of logs is rendered", () => {
  let numberOfLogs = component.getByTestId("number-of-logs");

  expect(numberOfLogs.textContent).toContain("0");

  setup({ numberOfLogs: 1, logData: "" });
  numberOfLogs = component.getByTestId("number-of-logs");

  expect(numberOfLogs.textContent).toContain("1");
});

test("log data is rendered", () => {
  let logData = component.getByTestId("log-data");

  expect(logData.textContent).toBe("logData: ");

  setup({ numberOfLogs: 0, logData: "1234" });
  logData = component.getByTestId("log-data");

  expect(logData.textContent).toBe("logData: 1234");
});

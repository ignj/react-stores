import React from "react";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import App from "../App";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import { incrementNumberOfLogs, updateLogData } from "../StoreManagement";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

let store: MockStoreEnhanced<unknown, {}>;
let component: RenderResult;

beforeEach(() => {
  store = mockStore({
    numberOfLogs: 0,
    logData: "",
  });

  store.dispatch = jest.fn();

  component = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test("increment logs action is dispatched", () => {
  const incrementLogsButton = component.getByTestId("increment-logs");

  fireEvent.click(incrementLogsButton);

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(incrementNumberOfLogs());
});

test("update logs action is dispatched", () => {
  const updateLogsButton = component.getByTestId("update-logs");

  fireEvent.click(updateLogsButton);

  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(updateLogData());
});

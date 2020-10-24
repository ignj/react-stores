import { observable, action, makeObservable } from "mobx";
import { createContext } from "react";

export class Store {
  numberOfLogs: number = 0;
  logData: string = "";

  constructor() {
    makeObservable(this, {
      numberOfLogs: observable,
      logData: observable,
      incrementNumberOfLogs: action,
      updateLogData: action,
    });
  }

  incrementNumberOfLogs = () => {
    this.numberOfLogs += 1;
  };

  updateLogData = () => {
    this.logData = new Date().getTime().toString();
  };
}

export const LogsStore = createContext(new Store());

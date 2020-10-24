import { createContext } from "react";

type ContextProps = {
  numberOfLogs: number;
  setNumberOfLogs: (value: number) => void;
  logData: string;
  setLogData: (value: string) => void;
};

export const LogsContext = createContext<Partial<ContextProps>>({});
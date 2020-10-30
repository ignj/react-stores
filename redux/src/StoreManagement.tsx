// ACTION TYPES
export enum EReduxActionTypes {
  INCREMENT_NUMBER_OF_LOGS = "INCREMENT_NUMBER_OF_LOGS",
  UPDATE_LOG_DATA = "UPDATE_LOG_DATA",
}

// ACTIONS
type Action = {
  type: string;
  payload: string;
};

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

export const incrementNumberOfLogs = (): IReduxBaseAction => ({
  type: EReduxActionTypes.INCREMENT_NUMBER_OF_LOGS,
});

export const updateLogData = (): IReduxBaseAction => ({
  type: EReduxActionTypes.UPDATE_LOG_DATA,
});

export type LogsDispatch = {
  incrementNumberOfLogs: () => void;
  updateLogData: () => void;
};

// REDUCERS

export type LogsState = {
  numberOfLogs: number;
  logData: string;
};

export const initialState: LogsState = {
  numberOfLogs: 0,
  logData: "",
};

export const LogsReducer = (
  state: LogsState = initialState,
  action: Action
) => {
  switch (action.type) {
    case EReduxActionTypes.INCREMENT_NUMBER_OF_LOGS:
      return {
        ...state,
        numberOfLogs: state.numberOfLogs + 1,
      };
    case EReduxActionTypes.UPDATE_LOG_DATA:
      return {
        ...state,
        logData: new Date().getTime().toString(),
      };
    default:
      return state;
  }
};

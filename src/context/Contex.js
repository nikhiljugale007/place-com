import { createContext, useContext, useReducer } from "react";
import { ReducerFunction } from "./ReducerFunction";
const AppContext = createContext();

const ContextInitialValue = {
  drives: [],
  appliedDrives: [],
  staredDrives: [],
  userData: {
    isLoggedIn: false,
  },
};
const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(
    ReducerFunction,
    ContextInitialValue
  );
  console.log(appState);
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };

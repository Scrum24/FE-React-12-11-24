import React, {createContext, useState} from "react";

export const AppContext = createContext();
AppContext.displayName = "AppContext";

function AppContextProvider({children}) {
  const [userInfo, setUserInfo] = useState({userName: null});

  function updateContextUserName(newUserName) {
    setUserInfo({userName: newUserName});
  }

  const userInfoValue = {
    userInfo: userInfo,
    updateContextUserName: updateContextUserName,
  };

  return (
    <AppContext.Provider value={userInfoValue}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;

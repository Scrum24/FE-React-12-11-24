import React, {createContext, useState} from "react";

export const UserInfoContext = createContext();
UserInfoContext.displayName = "UserInfoContext";

function UserInfoContextProvider({children}) {
  const [userInfo, setUserInfo] = useState({userName: null});

  function updateContextUserName(newUserName) {
    setUserInfo({userName: newUserName});
  }

  const userInfoValue = {
    userInfo: userInfo,
    updateContextUserName: updateContextUserName,
  };

  return (
    <UserInfoContext.Provider value={userInfoValue}>
      {children}
    </UserInfoContext.Provider>
  );
}

export default UserInfoContextProvider;

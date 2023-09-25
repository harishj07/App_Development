
export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = (username) => {
  return {
    type: SET_USER_NAME,
    payload: username,
  };
};

export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };
  


export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';


export const clearUserData = () => {
  return {
    type: CLEAR_USER_DATA,
  };
};
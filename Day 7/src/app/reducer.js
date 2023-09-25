
const initialState = {
    username: '', 
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_NAME': 
        return {
          ...state,
          username: action.payload, 
        };
      default:
        return state;
    }
    const initialState = {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
      orders: 10,
      inventorySpace: 500,
      totalShipping: 1000,
      remainingShipping: 500,
    };
  };
  
  export default userReducer;
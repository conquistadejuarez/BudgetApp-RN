const Reducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case "SET_TOKEN":
      console.log(action);
      return {
        ...state,
        token: action.payload,
      };

    case "SET_ID":
      console.log(action);
      return {
        ...state,
        id: action.payload,
      };

    case "SET_INCOME":
      console.log(action);
      return {
        ...state,
        outcome: action.payload,
      };

    case "SET_OUTCOME":
      console.log(action);
      return{
        ...state,
        income: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;

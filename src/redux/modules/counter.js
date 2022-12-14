// Action Value
const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

// Action Creator
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const removeNumber = (payload) => {
  return {
    type: REMOVE_NUMBER,
    payload,
  };
};

// Initial State
const initialState = {
  number: 0,
};

// Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }
    case REMOVE_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }
    default:
      return state;
  }
};

// export
export default counter;

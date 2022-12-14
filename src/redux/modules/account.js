// Action Value
const DEPOSIT_DOLLAR = "DEPOSIT_DOLLAR";
const WITHDRAW_DOLLOR = "WITHDRAW_DOLLOR";

// Action Creator
export const depositDollar = (payload) => {
  return {
    type: DEPOSIT_DOLLAR,
    payload,
  };
};

export const withdrawDollar = (payload) => {
  return {
    type: WITHDRAW_DOLLOR,
    payload,
  };
};

const initialState = {
  balance: 0,
};

// Reducer
const account = (state = initialState, action) => {
  switch (action.type) {
    // 입금 : payload로 받아온 값 만큼을 더해줌
    case DEPOSIT_DOLLAR: {
      return {
        balance: state.balance + action.payload,
      };
    }
    // 출금 : payload로 받아온 값 만큼을 빼줌
    case WITHDRAW_DOLLOR: {
      return {
        balance: state.balance - action.payload,
      };
    }
    default:
      return state;
  }
};

export default account;

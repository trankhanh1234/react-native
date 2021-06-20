import { type } from "../constanst";

const defaultState = {
  isLoading: true,
};

export const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case type.IS_LOADING:
      return { ...state, isLoading: data };
    default:
      return state;
  }
};

import React, { createContext, useReducer } from "react";
import { type } from "../../constanst";

const initialState = {
  articles: [],
  categories: [],
  location: "127 Nguyễn Đình chính",
  banner: {},
  collections: [],
  terms: [],
};

const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  const { data } = action;

  switch (action.type) {
    case type.LIST_ARTICEL:
      return { ...state, articles: data };
    case type.LIST_CATEGORIES:
      return { ...state, categories: data };
    case type.LOCATION:
      return { ...state, location: data };
    case type.BANNER:
      return { ...state, banner: data };
    case type.LIST_COLLESTIONS:
      return { ...state, collections: data };
    case type.LIST_TERM:
      return { ...state, terms: data };
    default:
      throw new Error("Unexpected action");
  }
};

const HomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { store, HomeProvider, homeReducer };

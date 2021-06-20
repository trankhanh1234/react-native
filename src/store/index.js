import { createStore } from "redux";
// Imports: Redux
import rootReducer from "./reducers";

export const store = createStore(rootReducer);

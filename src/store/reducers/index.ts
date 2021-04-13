import { combineReducers } from "redux";

import { issues } from "./issues";
import { loader } from "./loader";

export const appReducer = combineReducers({
  issues,
  loader,
});

export type RootState = ReturnType<typeof appReducer>;

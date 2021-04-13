import { ActionLoader, LoaderStateType } from "../../types";
import * as TYPES from "../types";

const initialState: LoaderStateType = { loading: false, message: "" };

export const loader = (state = initialState, action: ActionLoader) => {
  switch (action.type) {
    case TYPES.START_LOADING:
      return { ...state, loading: action.data };
    case TYPES.STOP_LOADING:
      return { ...state, loading: action.data, message: action.message };
    default:
      return state;
  }
};

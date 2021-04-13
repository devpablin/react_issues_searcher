import { ActionIssues, IssuesStateType } from "../../types";
import * as TYPES from "../types";

const initialState: IssuesStateType = { issues: [], total: 0 };

export const issues = (state = initialState, action: ActionIssues) => {
  switch (action.type) {
    case TYPES.LOAD_ISSUES:
      return { ...state, issues: action.data, total: action.total };
    case TYPES.LOAD_MORE_ISSUES:
      return { ...state, issues: [...state.issues, ...action.data] };
    case TYPES.CLEAR_ISSUES:
      return { ...state, issues: action.data };
    default:
      return state;
  }
};

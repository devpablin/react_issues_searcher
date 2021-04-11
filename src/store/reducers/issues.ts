import { ActionIssues, IssueType } from "../../types";
import * as TYPES from "../types";

const initialState:IssueType[] = [];

export const issues = (state = initialState, action:ActionIssues) => {
  switch (action.type) {
    case TYPES.LOAD_ISSUES:
      return action.data;
    case TYPES.CLEAR_ISSUES:
      return action.data;
    default:
      return state;
  }
}

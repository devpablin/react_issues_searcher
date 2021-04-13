import axios from "axios";
import { Dispatch } from "redux";
import { IssueType } from "../../types";
import { LOAD_ISSUES, CLEAR_ISSUES, LOAD_MORE_ISSUES } from "../types";
import { startLoading, stopLoading } from "./loader";

export const loadIssues = (issues: IssueType[], total: number) => {
  return {
    type: LOAD_ISSUES,
    data: issues,
    total: total,
  };
};

export const loadMoreIssues = (issues: IssueType[], total: number) => {
  return {
    type: LOAD_MORE_ISSUES,
    data: issues,
    total: total,
  };
};
export const getIssues = (word: string, page: number, more?: boolean) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading());
      const response = await axios.get(
        `https://api.github.com/search/issues?q=${word}+in:title+repo:facebook/react&page=${page}&per_page=10`
      );
      if (response.status === 200) {
        if (more)
          dispatch(
            loadMoreIssues(response.data.items, response.data.total_count)
          );
        else
          dispatch(loadIssues(response.data.items, response.data.total_count));
      }
      dispatch(stopLoading());
    } catch (error) {
      console.error(error);
      dispatch(stopLoading(error.message));
    }
  };
};

export const clearIssues = () => {
  return {
    type: CLEAR_ISSUES,
    data: [],
  };
};

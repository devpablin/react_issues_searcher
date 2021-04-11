import axios from 'axios';
import { Dispatch } from 'redux';
import { IssueType } from '../../types';
import { LOAD_ISSUES } from '../types';

export const loadIssues = ( issues:IssueType[] ) => {
  return {
    type: LOAD_ISSUES,
    data: issues,
  }
}

export const getIssues = (word:string, page:number) => {
  return async (dispatch:Dispatch) => {
    try {
      const response = await axios.get(`https://api.github.com/search/issues?q=${word}+in:title+repo:facebook/react&page=${page}&per_page=10`);
      if(response.status===200){
        dispatch(loadIssues(response.data.items))
      }
    } catch (error) {
      console.error(error);
    }
    //dispatch(loadIssues(issues));
  }
}

export const clearIssues = ( issues:IssueType[] ) => {
  return {
    type: CLEAR_ISSUES,
    data: [],
  }
}

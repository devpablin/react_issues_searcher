import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../store/reducers'
import IssueCard from "./IssueCard";
import SearchInput from "./SearchInput";
const IssuesList = () => {
  const issues = useSelector((state:RootState) => state.issues);
  const issuesCards = issues.map(issue => {
    return <IssueCard key={issue.id} issue={issue}/>
  })
  return (<>
    <SearchInput />
    {issuesCards}
  </>);
};

export default IssuesList;

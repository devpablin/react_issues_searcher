import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { Waypoint } from "react-waypoint";
import { useIssuesDispatch, useIssuesState } from "../hooks";
import IssueCard from "./IssueCard";
import SearchInput from "./SearchInput";

const IssuesList = () => {
  const {issues, loading, hasMore, message} = useIssuesState();
  const [page, setPage] = React.useState(2);
  const [searchText, setSearchText] = React.useState('');
  const { getIssues } = useIssuesDispatch();

  const loadMoreIssues = ()=> {
    if(hasMore && message===''){
      getIssues(searchText, page, true);
      setPage(prevPage => prevPage + 1);
    }
  }
  const issuesCards = issues.map((issue, index) => {
    if(issues.length-1 === index){
      return(
        <>
          <IssueCard key={issue.id} issue={issue}/>
          <Waypoint onEnter={loadMoreIssues}/>
        </>
      )
    }
    return <IssueCard key={issue.id} issue={issue}/>
  })

  return (<>
    <SearchInput setSearchText={setSearchText}/>
    {issuesCards}
    {loading && <CircularProgress style={{marginTop: 10}}/>}
    {(message!=='')&& <p>{message}</p>}
  </>);
};

export default IssuesList;

import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Waypoint } from "react-waypoint";
import { useIssuesDispatch, useIssuesState } from "../hooks";
import IssueCard from "./IssueCard";
import SearchInput from "./SearchInput";

const IssuesList = () => {
  const [page, setPage] = React.useState(2);
  const [searchText, setSearchText] = React.useState('');
  const [currentIssue, setCurrentIssue] = React.useState(0);
  //const [selectedIssue, setSelectedIssue] = React.useState(-1);

  const {issues, loading, hasMore, message} = useIssuesState();
  const { getIssues } = useIssuesDispatch();

  useHotkeys('up', (event)=>{
    event.preventDefault();
    event.stopPropagation();
    setCurrentIssue(prevCurrentIssue => {
      if(prevCurrentIssue === -1) return prevCurrentIssue
      return prevCurrentIssue - 1
    });
  },[issues])

  useHotkeys('down', (event)=>{
    event.preventDefault();
    event.stopPropagation();
    setCurrentIssue(prevCurrentIssue =>{
      if(prevCurrentIssue >= issues.length - 1 ) return prevCurrentIssue
      return prevCurrentIssue + 1
    });
  },[issues])

  const loadMoreIssues = ()=> {
    if(hasMore && message===''){
      getIssues(searchText, page, true);
      setPage(prevPage => prevPage + 1);
    }
  }
  const issuesCards = issues.map((issue, index) => {
    if(issues.length-1 === index){
      return(
        <React.Fragment key={issue.id}>
          <IssueCard active={currentIssue===index} issue={issue}/>
          <Waypoint onEnter={loadMoreIssues}/>
        </React.Fragment>
      )
    }
    return <IssueCard active={currentIssue===index} key={issue.id} issue={issue}/>
  })

  return (<>
    <SearchInput setSearchText={setSearchText}/>
    {issuesCards}
    {loading && <CircularProgress style={{marginTop: 10}}/>}
    {(message!=='')&& <p>{message}</p>}
  </>);
};

export default IssuesList;

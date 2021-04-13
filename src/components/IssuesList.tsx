import { CircularProgress, Modal } from "@material-ui/core";
import * as React from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Waypoint } from "react-waypoint";
import { useIssuesDispatch, useIssuesState } from "../hooks";
import IssueCard from "./IssueCard";
import SearchInput from "./SearchInput";
import "./IssueModal.css";
import IssueModal from "./IssueModal";

const IssuesList = () => {
  const [page, setPage] = React.useState(2);
  const [searchText, setSearchText] = React.useState("");
  const [currentIssue, setCurrentIssue] = React.useState(0);
  const { getIssues } = useIssuesDispatch();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getIssues("", 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    setCurrentIssue(0);
  }, [searchText]);

  const { issues, loading, hasMore, message } = useIssuesState();

  useHotkeys(
    "up, k",
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCurrentIssue((prevCurrentIssue) => {
        if (prevCurrentIssue === 0) return prevCurrentIssue;
        return prevCurrentIssue - 1;
      });
    },
    [issues]
  );

  useHotkeys(
    "down, j",
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setCurrentIssue((prevCurrentIssue) => {
        if (prevCurrentIssue >= issues.length - 1) return prevCurrentIssue;
        return prevCurrentIssue + 1;
      });
    },
    [issues]
  );
  const openModal = ()=>{
    if(issues[currentIssue]){
      console.log(issues[currentIssue]);
      setShowModal(true)
    }
  }

  useHotkeys(
    "enter",
    () => {
      openModal();
    },
    [issues]
  );

  useHotkeys(
    "esc",
    (event) => {
      setShowModal(false);
    },
    [issues]
  );

  const loadMoreIssues = () => {
    if (hasMore && message === "") {
      getIssues(searchText, page, true);
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handleClickIssue = (index: number) => {
    setCurrentIssue(index);
    setShowModal(true);
  };
  const issuesCards = issues.map((issue, index) => {
    if (issues.length - 1 === index) {
      return (
        <React.Fragment key={issue.id}>
          <IssueCard
            active={currentIssue === index}
            issue={issue}
            onClick={() => handleClickIssue(index)}
          />
          <Waypoint onEnter={loadMoreIssues} />
        </React.Fragment>
      );
    }
    return (
      <IssueCard
        active={currentIssue === index}
        key={issue.id}
        issue={issue}
        onClick={() => handleClickIssue(index)}
      />
    );
  });

  return (
    <>
      <SearchInput setSearchText={setSearchText} />
      {issuesCards}
      {loading && <CircularProgress style={{ marginTop: 10 }} />}
      {message !== "" && <p>{message}</p>}
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <IssueModal issue={issues[currentIssue]} />
      </Modal>
    </>
  );
};

export default IssuesList;

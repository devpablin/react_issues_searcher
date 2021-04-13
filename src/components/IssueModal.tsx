import * as React from "react";
import { Card, CardContent, Chip, Typography } from "@material-ui/core";
import { IssueType } from "../types";
import "./IssueModal.css";
import ReactMarkdown from "react-markdown";

const IssueModal = ({
  issue,
  className,
}: {
  issue: IssueType;
  className?: string;
}) => {
  const labelChips = issue.labels.map((label) => {
    return (
      <Chip
        key={label.id}
        label={label.name}
        style={{ backgroundColor: `#${label.color}`, marginRight: 5 }}
      />
    );
  });
  return (
    <Card className={`issue-modal ${className}`}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{ fontWeight: 600 }}>
          {issue.title}
        </Typography>
        <div className="issue-labels">{labelChips}</div>
        <div className="issue-body-markdown">
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueModal;

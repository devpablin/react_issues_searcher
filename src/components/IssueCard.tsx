import { Card, CardContent, Chip, Typography} from "@material-ui/core";
import * as React from "react";
import { textTruncate } from "../helpers";
import { IssueType } from "../types";
import './IssueCard.css'

const IssueCard = ({issue}: {issue:IssueType}) => {
  const labelChips = issue.labels.map(label=> {
    return <Chip key={label.id} label={label.name} style={{backgroundColor:`#${label.color}`, marginRight: 5}}/>
  })
  return (
    <Card className="issue-card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {issue.title}
        </Typography>
        <Typography variant="body2" component="p">
          {textTruncate(issue.body, 150)}
        </Typography>
      </CardContent>
      <div className="card-labels">
        {labelChips}
      </div>
    </Card>
  );
};

export default IssueCard;

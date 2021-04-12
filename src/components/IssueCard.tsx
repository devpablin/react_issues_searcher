import { Card, CardContent, Typography} from "@material-ui/core";
import * as React from "react";
import { textTruncate } from "../helpers";
import { IssueType } from "../types";
import './IssueCard.css'

const IssueCard = ({issue}: {issue:IssueType}) => {

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

    </Card>
  );
};

export default IssueCard;

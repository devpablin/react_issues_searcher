import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
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
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default IssueCard;

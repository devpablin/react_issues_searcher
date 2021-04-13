import { Card, CardContent, Chip, Typography} from "@material-ui/core";
import * as React from "react";
import { textTruncate } from "../helpers";
import { IssueType } from "../types";
import './IssueCard.css'

const IssueCard = ({issue, className, active, onClick}: {issue:IssueType, className?:string, active:boolean, onClick:()=>void}) => {

  const IssueCardRef = React.useRef<HTMLDivElement>()
  React.useEffect(()=>{
    if (active) {
      IssueCardRef?.current?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    }
  }, [active])
  const labelChips = issue.labels.map(label=> {
    return <Chip key={label.id} label={label.name} style={{backgroundColor:`#${label.color}`, marginRight: 5}}/>
  })
  return (
    <Card
      ref={IssueCardRef}
      className={`issue-card ${className}`}
      style={active?{backgroundColor:'rgba(56, 163, 245,0.5)'}:{}}
      onClick={onClick}
      >
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

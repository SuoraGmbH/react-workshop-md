import React from "react";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  timeEntry: TimeEntry;
};

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return <div>Kommentar: {timeEntry.comment.toUpperCase()}</div>;
};

export default TimeEntryView;

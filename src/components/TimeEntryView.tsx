import React, { ComponentProps } from "react";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  timeEntry: TimeEntry;
};

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return <div>Kommentar: {timeEntry.comment}</div>;
};

export default TimeEntryView;

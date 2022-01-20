import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";
import { withTimeEntriesFromBackend } from "../hocs/withTimeEntriesFromBackend";

interface Props {
  timeEntries: TimeEntry[];
  highlight?: boolean;
}
export const TimeEntryList: React.FunctionComponent<Props> = ({
  timeEntries,
  highlight = false,
}) => {
  return (
    <>
      {highlight && <h1>Highlight!!!</h1>}
      {timeEntries.map((timeEntry) => (
        <TimeEntryView timeEntry={timeEntry} key={timeEntry.id} />
      ))}
    </>
  );
};

export const TimeEntryListFromBackend =
  withTimeEntriesFromBackend(TimeEntryList);

export default TimeEntryList;

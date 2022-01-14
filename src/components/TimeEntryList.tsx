import React from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

interface Props {}
const TimeEntryList: React.FunctionComponent<Props> = () => {
  const timeEntries: TimeEntry[] = [
    {
      id: "oadsuhhjiodsajio",
      start: new Date(),
      end: new Date(),
      comment: "React Schulung",
    },
    {
      id: "oads23uhhjiodsajio",
      start: new Date(),
      end: new Date(),
      comment: "React Schulung am Mittag",
    },
    {
      id: "oadsuhhjiods412ajio",
      start: new Date(),
      end: new Date(),
      comment: "React Schulung am Abend",
    },
  ];

  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView timeEntry={timeEntry} key={timeEntry.id} />
      ))}
    </>
  );
};

export default TimeEntryList;

import React, { useState } from "react";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {}

const DynamicTimeEntryList: React.FunctionComponent<Props> = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    setTimeEntries((prevTimeEntries) => [...prevTimeEntries, timeEntry]);
  };
  return (
    <>
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <TimeEntryList timeEntries={timeEntries} />
    </>
  );
};

export default DynamicTimeEntryList;

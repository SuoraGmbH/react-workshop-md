import React from "react";
import TimeEntryForm from "./TimeEntryForm";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {}

const TimeEntryFormForServer: React.FunctionComponent<Props> = () => {
  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    fetch("http://localhost:3001/timeEntries", {
      method: "POST",
      body: JSON.stringify(timeEntry),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />;
};

export default TimeEntryFormForServer;

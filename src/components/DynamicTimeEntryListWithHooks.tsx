import React from "react";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import useAddTimeEntryMutation from "../hooks/useAddTimeEntryMutation";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import { TimeEntry } from "../domain/TimeEntry";

interface Props {}

const DynamicTimeEntryListWithHooks: React.FunctionComponent<Props> = () => {
  const { add } = useAddTimeEntryMutation();
  const { timeEntries, refetch } = useTimeEntriesFromServer();

  const handleAddTimeEntry = (timeEntry: TimeEntry) => {
    add(timeEntry).then(() => {
      refetch();
    });
  };

  return (
    <>
      <TimeEntryForm onAddTimeEntry={handleAddTimeEntry} />
      <TimeEntryList timeEntries={timeEntries} />
    </>
  );
};

export default DynamicTimeEntryListWithHooks;

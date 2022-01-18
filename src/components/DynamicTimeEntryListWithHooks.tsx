import React from "react";
import TimeEntryForm from "./TimeEntryForm";
import TimeEntryList from "./TimeEntryList";
import useAddTimeEntryMutation from "../hooks/useAddTimeEntryMutation";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";

interface Props {}

const DynamicTimeEntryListWithHooks: React.FunctionComponent<Props> = () => {
  const { add } = useAddTimeEntryMutation();
  const { timeEntries } = useTimeEntriesFromServer();
  return (
    <>
      <TimeEntryForm onAddTimeEntry={add} />
      <TimeEntryList timeEntries={timeEntries} />
    </>
  );
};

export default DynamicTimeEntryListWithHooks;

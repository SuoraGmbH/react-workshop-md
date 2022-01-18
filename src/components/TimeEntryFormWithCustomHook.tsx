import React from "react";
import useAddTimeEntryMutation from "../hooks/useAddTimeEntryMutation";
import TimeEntryForm from "./TimeEntryForm";

interface Props {}

const TimeEntryFormWithCustomHook: React.FunctionComponent<Props> = () => {
  const { add, isLoading } = useAddTimeEntryMutation();

  return (
    <>
      <TimeEntryForm onAddTimeEntry={add} />
    </>
  );
};

export default TimeEntryFormWithCustomHook;

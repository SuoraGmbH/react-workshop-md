import React from "react";
import TimeEntryForm from "./TimeEntryForm";
import useAddTimeEntryMutationReactQuery from "../hooks/useAddTimeEntryMutationReactQuery";

interface Props {}

const TimeEntryFormWithReactQueryInvalidation: React.FunctionComponent<
  Props
> = () => {
  const { add } = useAddTimeEntryMutationReactQuery();

  return <TimeEntryForm onAddTimeEntry={add} />;
};

export default TimeEntryFormWithReactQueryInvalidation;

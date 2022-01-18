import React from "react";
import TimeEntryList from "./TimeEntryList";
import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import useTimeEntriesFromServerWithReactQuery from "../hooks/useTimeEntriesFromServerWithReactQuery";

interface Props {}

export const TimeEntryListFromCustomHook: React.FunctionComponent<
  Props
> = () => {
  const { timeEntries } = useTimeEntriesFromServerWithReactQuery();

  if (timeEntries.length === 0) {
    return <div>Loading…</div>;
  }

  return <TimeEntryList timeEntries={timeEntries} />;
};

import React, { useEffect, useState } from "react";
import { fetchTimeEntriesFromServerForThomas } from "../hooks/useTimeEntriesFromServer";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryList from "./TimeEntryList";

interface Props {}

export const TimeEntryListWithFetchHelperForThomas: React.FunctionComponent<
  Props
> = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  useEffect(() => {
    const ac = new AbortController();
    fetchTimeEntriesFromServerForThomas(setTimeEntries, ac);
    return () => {
      ac.abort();
    };
  }, []);

  return <TimeEntryList timeEntries={timeEntries} />;
};

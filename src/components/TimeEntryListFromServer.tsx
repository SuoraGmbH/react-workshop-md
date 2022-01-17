import React, { useEffect } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryList from "./TimeEntryList";

interface Props {}

export type TimeEntryBackend = {
  id: string;
  start: string;
  end: string;
  comment: string;
};

const TimeEntryListFromServer: React.FunctionComponent<Props> = () => {
  const [timeEntries, setTimeEntries] = React.useState<TimeEntry[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/timeEntries")
      .then((response) => response.json())
      .then((data: TimeEntryBackend[]) => {
        const convertedTimeEntries = data.map((timeEntry): TimeEntry => {
          return {
            id: timeEntry.id,
            comment: timeEntry.comment,
            start: new Date(timeEntry.start),
            end: new Date(timeEntry.end),
          };
        });

        setTimeEntries((prevTimeEntries) => [
          ...prevTimeEntries,
          ...convertedTimeEntries,
        ]);
      });
  }, []);

  return <TimeEntryList timeEntries={timeEntries} />;
};

export default TimeEntryListFromServer;

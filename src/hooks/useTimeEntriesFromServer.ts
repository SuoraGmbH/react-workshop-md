import { useEffect, useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import { TimeEntryBackend } from "../examples/convertBackendTimeEntry";
import useBaseUrl from "./useBaseUrl";

type UseTimeEntriesFromServerReturnValue = {
  timeEntries: TimeEntry[];
  isLoading: boolean;
  error?: Error;
};

const useTimeEntriesFromServer = (): UseTimeEntriesFromServerReturnValue => {
  const baseUrl = useBaseUrl();
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetch(baseUrl + "/timeEntries", {
      signal: abortController.signal,
    })
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
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }

        // we should actually check if this is an Error
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      // cancel the request when unmounting the component
      abortController.abort();
    };
  }, []);

  return { timeEntries, isLoading, error };
};

export const fetchTimeEntriesFromServerForThomas = (
  timeEntrySetter: (timeEntries: TimeEntry[]) => void,
  ac: AbortController
) => {
  const abortController = new AbortController();
  fetch("http://localhost:3001/timeEntries", {
    signal: abortController.signal,
  })
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

      timeEntrySetter(convertedTimeEntries);
    })
    .catch((error) => {
      if (error.name === "AbortError") {
        return;
      }

      // we should actually check if this is an Error
    });
};

export default useTimeEntriesFromServer;

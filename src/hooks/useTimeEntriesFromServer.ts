import { useCallback, useEffect, useState } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import { TimeEntryBackend } from "../examples/convertBackendTimeEntry";
import useBaseUrl from "./useBaseUrl";

type UseTimeEntriesFromServerReturnValue = {
  timeEntries: TimeEntry[];
  isLoading: boolean;
  error?: Error;
  refetch: () => void;
};

const useTimeEntriesFromServer = (): UseTimeEntriesFromServerReturnValue => {
  const baseUrl = useBaseUrl();
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  const fetchTimeEntries = useCallback(() => {
    setIsLoading(true);
    // This is now missing the AbortController. We will not add it today,
    // but in reality it would be good to have it in here
    fetch(baseUrl + "/timeEntries")
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

        setTimeEntries(convertedTimeEntries);
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
  }, [baseUrl]);

  useEffect(() => {
    fetchTimeEntries();
  }, [baseUrl]);

  return { timeEntries, isLoading, error, refetch: fetchTimeEntries };
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

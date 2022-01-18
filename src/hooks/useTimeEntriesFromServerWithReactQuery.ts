import { TimeEntry } from "../domain/TimeEntry";
import { useQuery } from "react-query";
import useBaseUrl from "./useBaseUrl";
import { TimeEntryBackend } from "../components/TimeEntryListFromServer";
import convertBackendTimeEntry from "../examples/convertBackendTimeEntry";

type UseTimeEntriesFromServerReturnValue = {
  timeEntries: TimeEntry[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

const useTimeEntriesFromServerWithReactQuery =
  (): UseTimeEntriesFromServerReturnValue => {
    const baseUrl = useBaseUrl();
    const { isLoading, refetch, data, error } = useQuery<TimeEntry[], Error>(
      ["timeEntries"],
      async ({ signal }) => {
        const response = await fetch(baseUrl + "/timeEntries", { signal });
        const timeEntries: TimeEntryBackend[] = await response.json();
        return timeEntries.map(convertBackendTimeEntry);
      }
    );

    return {
      isLoading,
      refetch,
      timeEntries: data ?? [],
      error,
    };
  };

export default useTimeEntriesFromServerWithReactQuery;

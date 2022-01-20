import { TimeEntry } from "../domain/TimeEntry";
import { useQuery } from "react-query";
import useBaseUrl from "./useBaseUrl";
import { TimeEntryBackend } from "../components/TimeEntryListFromServer";
import convertBackendTimeEntry from "../examples/convertBackendTimeEntry";
import { useApiClient } from "./useApiClient";

type UseTimeEntriesFromServerReturnValue = {
  timeEntries: TimeEntry[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
};

export const timeEntriesQueryKey = "timeEntries";
const useTimeEntriesFromServerWithReactQuery =
  (): UseTimeEntriesFromServerReturnValue => {
    const apiClient = useApiClient();
    const { isLoading, refetch, data, error } = useQuery<TimeEntry[], Error>(
      [timeEntriesQueryKey],
      apiClient.getTimeEntries
    );

    return {
      isLoading,
      refetch,
      timeEntries: data ?? [],
      error,
    };
  };

export default useTimeEntriesFromServerWithReactQuery;

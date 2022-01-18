import { TimeEntry } from "../domain/TimeEntry";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

type MutationReturnValue = {
  add: (timeEntry: TimeEntry) => void;
  isLoading: boolean;
};

const useAddTimeEntryMutationReactQuery = (): MutationReturnValue => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(
    (timeEntry: TimeEntry) => {
      return fetch("http://localhost:3001/timeEntries", {
        method: "POST",
        body: JSON.stringify(timeEntry),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    { onSettled: (data) => queryClient.invalidateQueries("timeEntries") }
  );

  return { add: mutate, isLoading };
};

export default useAddTimeEntryMutationReactQuery;

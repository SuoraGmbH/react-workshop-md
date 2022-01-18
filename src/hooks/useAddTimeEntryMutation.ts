import { TimeEntry } from "../domain/TimeEntry";
import { useState } from "react";

type MutationReturnValue = {
  add: (timeEntry: TimeEntry) => Promise<void>;
  isLoading: boolean;
};

const useAddTimeEntryMutation = (): MutationReturnValue => {
  const [isLoading, setIsLoading] = useState(false);
  const add = async (timeEntry: TimeEntry) => {
    setIsLoading(true);
    try {
      await fetch("http://localhost:3001/timeEntries", {
        method: "POST",
        body: JSON.stringify(timeEntry),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { add, isLoading };
};

export default useAddTimeEntryMutation;

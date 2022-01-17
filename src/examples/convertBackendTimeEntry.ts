import { TimeEntry } from "../domain/TimeEntry";

export type TimeEntryBackend = {
  id: string;
  start: string;
  end: string;
  comment: string;
};

const convertBackendTimeEntry = (
  backendTimeEntry: TimeEntryBackend
): TimeEntry => {
  return {
    ...backendTimeEntry,
    start: new Date(backendTimeEntry.start),
    end: new Date(backendTimeEntry.end),
  };
};

export default convertBackendTimeEntry;

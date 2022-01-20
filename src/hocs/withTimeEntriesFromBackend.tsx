import useTimeEntriesFromServer from "../hooks/useTimeEntriesFromServer";
import { ComponentType } from "react";
import { TimeEntry } from "../domain/TimeEntry";

export function withTimeEntriesFromBackend<TProps extends {}>(
  Component: ComponentType<{ timeEntries: TimeEntry[] } & TProps>
): ComponentType<Omit<TProps, "timeEntries">> {
  return (props) => {
    const { timeEntries } = useTimeEntriesFromServer();

    return (
      <Component {...(props as TProps)} timeEntries={timeEntries}>
        Hallo Welt123
      </Component>
    );
  };
}

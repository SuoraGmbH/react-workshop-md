import React, { ComponentProps } from "react";
import { TimeEntry } from "../domain/TimeEntry";
import TimeEntryView from "./TimeEntryView";

// const foo: ComponentProps<typeof TimeEntryView>["timeEntry"][] = [];

interface Props {
  timeEntries: ComponentProps<typeof TimeEntryView>["timeEntry"][];
}
const TimeEntryList: React.FunctionComponent<Props> = ({ timeEntries }) => {
  return (
    <>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView timeEntry={timeEntry} key={timeEntry.id} />
      ))}
    </>
  );
};

export default TimeEntryList;

import React, { ComponentProps } from "react";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  timeEntry: Pick<TimeEntry, "id" | "comment">;
};

const TimeEntryView: React.FunctionComponent<Props> = ({ timeEntry }) => {
  return (
    <div>
      {/*<p>{timeEntry.start.toLocaleTimeString()}</p>*/}
      <p>Kommentar: {timeEntry.comment}</p>
    </div>
  );
};

export default TimeEntryView;

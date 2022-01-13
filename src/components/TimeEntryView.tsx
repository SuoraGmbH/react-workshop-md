import React from "react";

type Props = {
  comment: string;
};

const TimeEntryView: React.FunctionComponent<Props> = ({ comment }: Props) => {
  return <div>Kommentar: {comment.toUpperCase()}</div>;
};

export default TimeEntryView;

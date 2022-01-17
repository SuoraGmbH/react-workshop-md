import { useEffect, useState } from "react";
import TextDisplay from "./TextDisplay";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  onAddTimeEntry?: (timeEntry: TimeEntry) => void;
};

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (onAddTimeEntry) {
      onAddTimeEntry({
        id: new Date().toISOString(),
        start: new Date(),
        end: new Date(),
        comment: inputValue,
      });
    }

    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <input onChange={handleChange} value={inputValue} />
      <div>{inputValue}</div>
    </form>
  );
};

export default TimeEntryForm;

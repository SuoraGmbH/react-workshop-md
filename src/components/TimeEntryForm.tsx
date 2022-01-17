import { useEffect, useState } from "react";
import TextDisplay from "./TextDisplay";
import { TimeEntry } from "../domain/TimeEntry";

type Props = {
  onAddTimeEntry?: (timeEntry: TimeEntry) => void;
};

const TimeEntryForm: React.FunctionComponent<Props> = ({ onAddTimeEntry }) => {
  console.log("TimeEntryForm renders");
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

  useEffect(() => {
    console.log("TimeEntryForm enters the DOM");

    return () => {
      console.log("TimeEntryForm left the DOM");
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <input onChange={handleChange} value={inputValue} />
      <TextDisplay value={inputValue} />
      <TextDisplay value="Render dich bitte nicht neu" />
      {inputValue} <hr />
    </form>
  );
};

export default TimeEntryForm;

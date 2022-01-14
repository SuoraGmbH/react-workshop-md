import { useState } from "react";
import TimeEntryView from "./TimeEntryView";
import ComponentWithChildren from "./ComponentWithChildren";
import TextDisplay from "./TextDisplay";

const TimeEntryForm: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <input onChange={handleChange} value={inputValue} />
      <TextDisplay value={inputValue} />
      <TextDisplay value="Render dich bitte nicht neu" />
      {inputValue}
    </form>
  );
};

export default TimeEntryForm;

import { useEffect, useState } from "react";
import TextDisplay from "./TextDisplay";

const TimeEntryForm: React.FunctionComponent = () => {
  console.log("TimeEntryForm renders");
  const [inputValue, setInputValue] = useState("");
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value.toUpperCase());
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
      {inputValue}
    </form>
  );
};

export default TimeEntryForm;

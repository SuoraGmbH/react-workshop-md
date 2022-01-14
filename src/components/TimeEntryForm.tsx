import { useState } from "react";

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
      {inputValue}
    </form>
  );
};

export default TimeEntryForm;

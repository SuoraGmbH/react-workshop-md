import React, { useState } from "react";
import TimeEntryForm from "./TimeEntryForm";
function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter renders");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <TimeEntryForm key={count} />
    </div>
  );
}

export default Counter;

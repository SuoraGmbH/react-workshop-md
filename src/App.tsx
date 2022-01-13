import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import ComponentWithChildren from "./components/ComponentWithChildren";

export function App() {
  return (
    <div>
      <ComponentWithChildren>
        <TimeEntryView comment="Hallo Welt123" />
      </ComponentWithChildren>
      <ComponentWithChildren>
        <div>asdda</div>
      </ComponentWithChildren>
      <ComponentWithChildren></ComponentWithChildren>
      <ComponentWithChildren>asdsa</ComponentWithChildren>
      <TimeEntryView comment="Hallo Welt">Hello Children</TimeEntryView>
      <TimeEntryView comment="Hallo Welt123" />
      <TimeEntryView comment="Hallo Welt" />
      <TimeEntryView comment="Hallo Welt" />
      MediaDIALOG
    </div>
  );
}

export default App;

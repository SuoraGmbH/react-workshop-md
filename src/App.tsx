import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import ComponentWithChildren from "./components/ComponentWithChildren";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import { GithubRepoInformation } from "./components/GithubRepoInformation";
import DynamicGithubRepoInformation from "./components/DynamicGithubRepoInformation";

export function App() {
  const timeEntry: TimeEntry = {
    id: "1234",
    start: new Date(),
    end: new Date(),
    comment: "Hallo Welt",
  };

  return (
    <div>
      <ComponentWithChildren>
        <TimeEntryView timeEntry={timeEntry} />
      </ComponentWithChildren>
      <ComponentWithChildren>
        <div>asdda</div>
      </ComponentWithChildren>
      <ComponentWithChildren></ComponentWithChildren>
      <ComponentWithChildren>asdsa</ComponentWithChildren>
      <TimeEntryView timeEntry={timeEntry}>Hello Children</TimeEntryView>
      <TimeEntryForm />
      <GithubRepoInformation repo="facebook/react" />
      <GithubRepoInformation repo="angular/angular" />
      <DynamicGithubRepoInformation />
      MediaDIALOG
    </div>
  );
}

export default App;

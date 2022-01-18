import React from "react";
import TimeEntryView from "./components/TimeEntryView";
import ComponentWithChildren from "./components/ComponentWithChildren";
import { TimeEntry } from "./domain/TimeEntry";
import TimeEntryForm from "./components/TimeEntryForm";
import { GithubRepoInformation } from "./components/GithubRepoInformation";
import DynamicGithubRepoInformation from "./components/DynamicGithubRepoInformation";
import Counter from "./components/Counter";
import TimeEntryList from "./components/TimeEntryList";
import DynamicTimeEntryList from "./components/DynamicTimeEntryList";
import TimeEntryListFromServer from "./components/TimeEntryListFromServer";
import TimeEntryFormForServer from "./components/TimeEntryFormForServer";
import { TimeEntryListFromCustomHook } from "./components/TimeEntryListFromCustomHook";

export function App() {
  const timeEntry: TimeEntry = {
    id: "1234",
    start: new Date(),
    end: new Date(),
    comment: "Hallo Welt",
  };

  return (
    <div>
      <TimeEntryListFromCustomHook />
      <DynamicTimeEntryList />
      <hr />
      <TimeEntryFormForServer />
      <TimeEntryListFromServer />
      {/*<Counter />*/}
      {/*<ComponentWithChildren>*/}
      {/*  <TimeEntryView timeEntry={timeEntry} />*/}
      {/*</ComponentWithChildren>*/}
      {/*<ComponentWithChildren>*/}
      {/*  <div>asdda</div>*/}
      {/*</ComponentWithChildren>*/}
      {/*<ComponentWithChildren></ComponentWithChildren>*/}
      {/*<ComponentWithChildren>asdsa</ComponentWithChildren>*/}
      {/*<TimeEntryView timeEntry={timeEntry}>Hello Children</TimeEntryView>*/}
      {/*<TimeEntryForm />*/}
      {/*<GithubRepoInformation repo="facebook/react" />*/}
      {/*<GithubRepoInformation repo="angular/angular" />*/}
      {/*<DynamicGithubRepoInformation />*/}
    </div>
  );
}

export default App;

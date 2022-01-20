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
import { TimeEntryListWithFetchHelperForThomas } from "./components/TimeEntryListWithFetchHelperForThomas";
import { BaseUrlContext, BaseUrlProvider } from "./hooks/useBaseUrl";
import TimeEntryFormWithCustomHook from "./components/TimeEntryFormWithCustomHook";
import DynamicTimeEntryListWithHooks from "./components/DynamicTimeEntryListWithHooks";
import GithubRepoInformationWithReactQuery from "./components/GithubRepoInformationWithReactQuery";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import TimeEntryFormWithReactQueryInvalidation from "./components/TimeEntryFormWithReactQueryInvalidation";
import { ApiClientProvider } from "./hooks/useApiClient";
import { DefaultApi } from "./generated/openapi-client";

const queryClient = new QueryClient({
  // defaultOptions: { queries: { staleTime: 30 * 1000 } },
});

export function App() {
  const timeEntry: TimeEntry = {
    id: "1234",
    start: new Date(),
    end: new Date(),
    comment: "Hallo Welt",
  };

  return (
    <BaseUrlProvider baseUrl="http://localhost:3001">
      <ApiClientProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />

          <div style={{ border: "1px solid green" }}>
            <GithubRepoInformationWithReactQuery repo="facebook/react" />
            <GithubRepoInformationWithReactQuery repo="angular/angular" />
            <DynamicGithubRepoInformation />
          </div>
          <div style={{ border: "1px solid black" }}>
            <TimeEntryListWithFetchHelperForThomas />
          </div>
          <div style={{ border: "1px solid yellow" }}>
            <TimeEntryListFromCustomHook />
            <TimeEntryFormWithReactQueryInvalidation />
          </div>
          <DynamicTimeEntryList />
          <hr />
          <TimeEntryFormForServer />
          <TimeEntryListFromServer />
          <div style={{ border: "1px solid pink" }}>
            <DynamicTimeEntryListWithHooks />
          </div>
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
        </QueryClientProvider>
      </ApiClientProvider>
    </BaseUrlProvider>
  );
}

export default App;

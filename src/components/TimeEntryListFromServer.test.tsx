import { render, screen } from "@testing-library/react";
import TimeEntryListFromServer from "./TimeEntryListFromServer";
import { setupServer } from "msw/node";
import jsonServerTimeEntriesHandler from "../mocks/json-server/timeEntries-get";

const mockServer = setupServer(jsonServerTimeEntriesHandler);

describe("<TimeEntryListFromServer />", () => {
  beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
  beforeEach(() => mockServer.resetHandlers());
  afterAll(() => mockServer.close());

  it("display a loading state initially", async () => {
    render(<TimeEntryListFromServer />);
    screen.getByText(/loading/i);
  });
  it("renders a comment from the mocked backend", async () => {
    render(<TimeEntryListFromServer />);
    await screen.findByText(/Learn Redux/);
  });

  // it("renders an error if the backend responds with 404", async () => {
  //   mockServer.resetHandlers(githubRepoFacebookReactHandler);
  //   render(<TimeEntryListFromServer />);
  //   await screen.findByText(/Learn Redux/);
  // });
});

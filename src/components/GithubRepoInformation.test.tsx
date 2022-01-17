import { render, screen } from "@testing-library/react";
import { GithubRepoInformation } from "./GithubRepoInformation";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { handlers } from "../mocks/handlers";
import githubRepoFacebookReactHandler from "../mocks/github/repos/facebook/react";

const mockServer = setupServer(githubRepoFacebookReactHandler);

describe("<GithubRepoInformation />", () => {
  beforeAll(() => mockServer.listen({ onUnhandledRequest: "error" }));
  beforeEach(() => mockServer.resetHandlers());
  afterAll(() => mockServer.close());

  test("renders the loading indicator initially", () => {
    render(<GithubRepoInformation repo="facebook/react" />);
    screen.getByText(/loading/i);
  });
  test("renders the data from the repository", async () => {
    render(<GithubRepoInformation repo="facebook/react" />);

    await screen.findByText("facebook/react");
  });
});

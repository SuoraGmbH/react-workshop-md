import { render, screen } from "@testing-library/react";
import { GithubRepoInformation } from "./GithubRepoInformation";
import { setupServer } from "msw/node";
import { rest } from "msw";

const mockServer = setupServer(
  rest.get(
    "https://api.github.com/repos/facebook/react",
    (req, res, context) => {
      return res(
        context.json({ open_issues_count: 4711, stargazers_count: 23 })
      );
    }
  )
);

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

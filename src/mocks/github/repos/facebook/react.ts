import { rest } from "msw";

const githubRepoFacebookReactHandler = rest.get(
  "https://api.github.com/repos/facebook/react",
  (req, res, context) => {
    return res(context.json({ open_issues_count: 4711, stargazers_count: 23 }));
  }
);
export default githubRepoFacebookReactHandler;

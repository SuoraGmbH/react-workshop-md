import { rest } from "msw";
import githubRepoFacebookReactHandler from "./github/repos/facebook/react";

export const handlers = [githubRepoFacebookReactHandler];

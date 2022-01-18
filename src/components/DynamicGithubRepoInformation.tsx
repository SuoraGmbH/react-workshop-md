import { GithubRepoInformation } from "./GithubRepoInformation";
import { useState } from "react";
import GithubRepoInformationWithReactQuery from "./GithubRepoInformationWithReactQuery";

const DynamicGithubRepoInformation: React.FunctionComponent = () => {
  const [repoName, setRepoName] = useState("");
  return (
    <div>
      <input
        value={repoName}
        onChange={(event) => setRepoName(event.target.value)}
      />
      <GithubRepoInformationWithReactQuery repo={repoName} />
    </div>
  );
};

export default DynamicGithubRepoInformation;

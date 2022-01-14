import { GithubRepoInformation } from "./GithubRepoInformation";
import { useState } from "react";

const DynamicGithubRepoInformation: React.FunctionComponent = () => {
  const [repoName, setRepoName] = useState("");
  return (
    <div>
      <input
        value={repoName}
        onChange={(event) => setRepoName(event.target.value)}
      />
      <GithubRepoInformation repo={repoName} />
    </div>
  );
};

export default DynamicGithubRepoInformation;

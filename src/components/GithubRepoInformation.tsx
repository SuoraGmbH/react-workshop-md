import React, { useEffect, useState } from "react";
import { GithubRepoData } from "../domain/GithubTypes";

interface Props {
  repo: string;
}

export const GithubRepoInformation: React.FunctionComponent<Props> = ({
  repo,
}) => {
  const [repoData, setRepoData] = useState<GithubRepoData>();

  useEffect(() => {
    const abortController = new AbortController();
    fetch(`https://api.github.com/repos/${repo}`, {
      signal: abortController.signal,
    })
      .then((response) => response.json())
      .then((data) => setRepoData(data))
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }
      });

    return () => {
      abortController.abort();
    };
  }, [repo]);

  if (!repoData) {
    return <div>Loading…</div>;
  }

  return (
    <div>
      <h1>{repo}</h1>
      <p>Stargazers : {repoData.stargazers_count}</p>
      <p>Open Issues: {repoData.open_issues_count}</p>
    </div>
  );
};

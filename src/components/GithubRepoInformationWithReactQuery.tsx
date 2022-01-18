import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { GithubRepoData } from "../domain/GithubTypes";

interface Props {
  repo: string;
}

const GithubRepoInformationWithReactQuery: React.FunctionComponent<Props> = ({
  repo,
}) => {
  const { data, isLoading, refetch, error } = useQuery<GithubRepoData>(
    ["repoInformation", repo],
    ({ signal }) => {
      return fetch(`https://api.github.com/repos/${repo}`, { signal }).then(
        (response) => response.json()
      );
    }
  );

  if (!data) {
    return <div>Please wait for data…</div>;
  }

  return (
    <div>
      {repo}: {data.stargazers_count}
    </div>
  );
};

export default GithubRepoInformationWithReactQuery;

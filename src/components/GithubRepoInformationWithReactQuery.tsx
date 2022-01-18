import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { GithubRepoData } from "../domain/GithubTypes";

interface Props {
  repo: string;
}

const GithubRepoInformationWithReactQuery: React.FunctionComponent<Props> = ({
  repo,
}) => {
  const { data, isLoading, refetch, error, isRefetching } = useQuery<
    GithubRepoData,
    Error
  >(
    ["repoInformation", repo],
    ({ signal }) => {
      return fetch(`http://localhost:3001/repos/${repo}`, { signal }).then(
        (response) => response.json()
      );
    },
    {
      refetchInterval: 30000,
      // refetchOnWindowFocus: false,
    }
  );

  if (!data) {
    return (
      <div>
        <pre>{JSON.stringify({ isLoading, isRefetching }, undefined, 2)}</pre>
        Please wait for data…
      </div>
    );
  }

  return (
    <div>
      <pre>{JSON.stringify({ isLoading, isRefetching }, undefined, 2)}</pre>
      {repo}: {data.stargazers_count}
    </div>
  );
};

export default GithubRepoInformationWithReactQuery;

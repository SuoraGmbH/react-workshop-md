import React, { useContext } from "react";
import { Configuration, DefaultApi } from "../generated/openapi-client";
import useBaseUrl from "./useBaseUrl";

const ApiClientContext = React.createContext<DefaultApi | undefined>(undefined);

type ApiClientProviderProps = {};
// | { baseUrl: string }
// | { apiClient: DefaultApi };

export const ApiClientProvider: React.FunctionComponent<
  ApiClientProviderProps
> = (props) => {
  const baseUrl = useBaseUrl();

  const apiClient = new DefaultApi(undefined, baseUrl);

  return (
    <ApiClientContext.Provider value={apiClient}>
      {props.children}
    </ApiClientContext.Provider>
  );
};

export const useApiClient = (): DefaultApi => {
  const apiClient = useContext(ApiClientContext);

  if (!apiClient) {
    throw new Error(
      "Missing apiClient in context, did you forget to wrap your application with <ApiClientProvider />?"
    );
  }

  return apiClient;
};

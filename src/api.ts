import { DefaultApi } from "./generated/openapi-client";

const apiClient = new DefaultApi(undefined /** something from env */);

// Could be a migration path to migrate away from import based singletons
export const useApiClientSingleton = () => {
  return apiClient;
};

export default apiClient;

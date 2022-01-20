import { DefaultApi } from "../generated/openapi-client";

const apiClient = new DefaultApi(undefined /** something from env */);

// Could be a future proof but "simpler" alternative to using the context.
// I don't recommend it though.
const useApiClientSingleton = () => {
  return apiClient;
};

export default useApiClientSingleton;

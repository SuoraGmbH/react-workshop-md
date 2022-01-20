import { DefaultApi } from "../generated/openapi-client";
import { TimeEntry } from "../domain/TimeEntry";
import convertBackendTimeEntry from "../examples/convertBackendTimeEntry";

type GetTimeEntriesParameters = {
  signal?: AbortSignal;
};

class ApiClient {
  constructor(private openapiClient: DefaultApi) {}

  async getTimeEntries(
    parameters: GetTimeEntriesParameters = {}
  ): Promise<TimeEntry[]> {
    const { signal } = parameters;
    const backendTimeEntries = await this.openapiClient.getTimeEntries({
      signal,
    });

    return backendTimeEntries.data.map(convertBackendTimeEntry);
  }
}

export default ApiClient;

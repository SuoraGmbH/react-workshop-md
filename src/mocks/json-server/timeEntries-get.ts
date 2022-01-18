import { rest } from "msw";
import { TimeEntryBackend } from "../../examples/convertBackendTimeEntry";

const jsonServerTimeEntriesHandler = rest.get(
  "http://localhost:3001/timeEntries",
  (req, res, context) => {
    const body: TimeEntryBackend[] = [
      {
        id: "2022-01-10T13:59:24.082Z",
        start: "2022-01-10T10:00:00.000Z",
        end: "2022-01-10T12:00:00.000Z",
        comment: "Learn React",
      },
      {
        id: "2022-01-11T19:59:24.082Z",
        start: "2022-01-11T16:00:00.000Z",
        end: "2022-01-11T18:00:00.000Z",
        comment: "Learn Redux",
      },
    ];

    return res(context.json(body));
  }
);
export default jsonServerTimeEntriesHandler;

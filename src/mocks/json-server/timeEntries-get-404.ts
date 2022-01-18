import { rest } from "msw";
import { TimeEntryBackend } from "../../examples/convertBackendTimeEntry";

const jsonServerTimeEntriesHandler404 = rest.get(
  "http://localhost:3001/timeEntries",
  (req, res, context) => {
    return res(context.status(404), context.json({}));
  }
);
export default jsonServerTimeEntriesHandler404;

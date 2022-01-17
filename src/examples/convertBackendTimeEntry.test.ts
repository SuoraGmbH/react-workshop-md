import convertBackendTimeEntry, {
  TimeEntryBackend,
} from "./convertBackendTimeEntry";

describe("convertBackendTimeEntry", () => {
  it("converts according to snapshot", () => {
    const backendTimeEntry: TimeEntryBackend = {
      id: "4711",
      start: "2022-01-17T10:54:32.608Z",
      end: "2022-01-17T12:54:32.608Z",
      comment: "Jest lernen",
    };

    expect(convertBackendTimeEntry(backendTimeEntry)).toMatchInlineSnapshot(`
      Object {
        "comment": "Jest lernen",
        "end": 2022-01-17T12:54:32.608Z,
        "id": "4711",
        "start": 2022-01-17T10:54:32.608Z,
      }
    `);
  });
});

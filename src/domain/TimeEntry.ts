export interface TimeEntryWithGenericDateType<TDate> {
  id: string;
  comment: string;
  start: TDate;
  end: TDate;
}

export type TimeEntry = TimeEntryWithGenericDateType<Date>;
export type TimeEntryBackend = TimeEntryWithGenericDateType<string>;
// export type TimeEntryFancyFrontendThing = TimeEntryBla<moment>;

// type TimeEntryWithoutId = Omit<TimeEntry, "id">;
// type TimeEntryTimes = Pick<TimeEntry, "start" | "end">;

// const bla: TimeEntryTimes = {};

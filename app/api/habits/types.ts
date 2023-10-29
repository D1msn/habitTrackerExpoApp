export type HabitsResponse = {
  totalCount: number;
  habits: Habit[];
};

export type Habit = {
  title: string;
  startDate: string;
  streak: number;
  color: number;
  description: string;
  trackDates: string[];
  type: string;
};

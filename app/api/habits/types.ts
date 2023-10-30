import { HabitColor } from '@api/habits/enums';

export type HabitsResponse = {
  totalCount: number;
  habits: Habit[];
};

type HabitType = 'simple';

export type Habit = {
  id: string;
  title: string;
  startDate: string;
  streak: number;
  color: HabitColor;
  description: string;
  trackDates: string[];
  type: HabitType;
};

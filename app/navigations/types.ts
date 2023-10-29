import { Habit } from '@api/habits/types';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Private: undefined;
};

export type PrivateStackParamList = {
  Home: undefined;
  Profile: undefined;
  HabitDetail: {
    habit: Habit;
  };
};

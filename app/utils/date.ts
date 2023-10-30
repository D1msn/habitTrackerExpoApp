import { CalendarUtils } from 'react-native-calendars';

export const getDate = (count: number, initialDate?: string) => {
  const date = new Date(initialDate || '');
  const newDate = date.setDate(date.getDate() + count);
  return CalendarUtils.getCalendarDateString(newDate);
};

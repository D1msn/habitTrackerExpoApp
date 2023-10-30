import { Flex, Text } from 'native-base';
import { Habit } from '@api/habits/types';
import { HomeScreenNavigationProp } from '@components/screens/private/HomeScreen';
import React from 'react';
import { HabitColorDictionary } from '@api/habits/enums';

export const HabitItem = ({
  habit,
  navigation,
}: {
  habit: Habit;
  navigation: HomeScreenNavigationProp;
}) => {
  return (
    <Flex borderRadius={2} backgroundColor={'gray.400:alpha.20'} p={2} justifyContent={'center'}>
      <Text
        color={HabitColorDictionary[habit.color]}
        onPress={() => navigation.navigate('HabitDetail', { habit })}>
        {habit.title}
      </Text>
      {/*<CalendarProvider*/}
      {/*  date={INITIAL_DATE}*/}
      {/*  onDateChanged={console.log}*/}
      {/*  onMonthChange={console.log}*/}
      {/*  showTodayButton={false}*/}
      {/*  disabledOpacity={0.6}*/}
      {/*  // numberOfDays={3}*/}
      {/*  style={{ flex: 2 }}>*/}
      {/*  <ExpandableCalendar firstDay={1} />*/}
      {/*</CalendarProvider>*/}
    </Flex>
  );
};

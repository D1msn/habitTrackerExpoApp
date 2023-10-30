import { Divider, Flex, Text, VStack } from 'native-base';
import { Habit } from '@api/habits/types';
import { HomeScreenNavigationProp } from '@components/screens/private/HomeScreen';
import React from 'react';

export const HabitItem = ({
  habit,
  navigation,
}: {
  habit: Habit;
  navigation: HomeScreenNavigationProp;
}) => {
  return (
    <VStack py={5} key={habit.title}>
      <Divider mb={2} />
      <Flex>
        <Text onPress={() => navigation.navigate('HabitDetail', { habit })}>{habit.title}</Text>
        <Text
          style={{
            color: 'gray',
          }}
          fontSize="xs">
          {habit.description}
        </Text>
      </Flex>
      <Divider mt={2} />
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
    </VStack>
  );
};

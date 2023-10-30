import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { PrivateStackParamList } from '@app/navigations/types';
import { Container } from '@components/ui';
import { GoBackHeader } from '@components/ui/layout/GoBackHeader';
import { Button, FormControl, Input, Radio, Text, VStack, WarningOutlineIcon } from 'native-base';
import { Controller, useForm } from 'react-hook-form';
import { Habit } from '@api/habits/types';
import { HabitColor, HabitColorDictionary } from '@api/habits/enums';

type HabitCreateScreenRouteProp = RouteProp<PrivateStackParamList, 'HabitCreate'>;
type HabitCreateScreenNavigationProp = StackNavigationProp<PrivateStackParamList, 'HabitCreate'>;

type HabitCreateScreenProps = {
  route: HabitCreateScreenRouteProp;
  navigation: HabitCreateScreenNavigationProp;
};

export const HabitCreateScreen = ({ navigation, route }: HabitCreateScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Habit>({
    defaultValues: {
      title: '',
      description: '',
      trackDates: [],
      startDate: new Date().toISOString(),
      type: 'simple',
      color: HabitColor.Primary,
      streak: 0,
    },
  });
  const onSubmit = (data: Habit) => console.log(data);

  return (
    <Container>
      <GoBackHeader title={'Создание привычки'} />
      <VStack space={'lg'} flex={1}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl isInvalid={!!errors.title}>
              <FormControl.Label>Название</FormControl.Label>
              <Input
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                placeholder="(Обязательно)"
              />
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Обязательное поле
              </FormControl.ErrorMessage>
            </FormControl>
          )}
          name="title"
        />

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl>
              <FormControl.Label>Описание</FormControl.Label>
              <Input
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                placeholder="(Не обязательно)"
              />
            </FormControl>
          )}
          name="description"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControl>
              <FormControl.Label>Цвет</FormControl.Label>
              <Radio.Group
                direction={'row'}
                name="habitColor"
                accessibilityLabel="habit color"
                value={value}
                onChange={(nextValue) => {
                  onChange(nextValue);
                }}>
                <Radio
                  _stack={{
                    marginRight: 5,
                  }}
                  value={HabitColor.Primary}>
                  <Text color={HabitColorDictionary[HabitColor.Primary]}>Primary</Text>
                </Radio>
                <Radio value={HabitColor.Secondary}>
                  <Text color={HabitColorDictionary[HabitColor.Secondary]}>Secondary</Text>
                </Radio>
              </Radio.Group>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Обязательное поле
              </FormControl.ErrorMessage>
            </FormControl>
          )}
          name="color"
        />
      </VStack>
      <Button size={'lg'} colorScheme={'amber'} onPress={handleSubmit(onSubmit)}>
        Сохранить
      </Button>
    </Container>
  );
};

import { EnumDictionary } from '@app/utils/types';

export const enum HabitColor {
  Primary = '0',
  Secondary = '1',
}

export const HabitColorDictionary: EnumDictionary<HabitColor, string> = {
  [HabitColor.Primary]: '#fff',
  [HabitColor.Secondary]: 'amber.700',
};

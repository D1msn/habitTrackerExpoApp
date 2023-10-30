import { useQuery } from '@tanstack/react-query';
import { getDoc } from 'firebase/firestore';
import { HabitsResponse } from '@api/habits/types';
import { getHabitsDoc } from '@api/habits/firebase';
import { QUERY_KEYS } from '@app/utils/queryKeys';

export function useGetHabits(userId: string) {
  const { data: habitsResponse, isLoading } = useQuery<HabitsResponse>(
    [QUERY_KEYS.Habits, userId],
    async () => {
      const docRef = await getHabitsDoc(userId);
      const docSnap = await getDoc(docRef);
      return docSnap.data() as HabitsResponse;
    },
    {
      enabled: userId !== null,
    }
  );

  return {
    habitsResponse,
    isLoading,
  };
}

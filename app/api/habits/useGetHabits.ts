import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../firebaseConfig';
import { HabitsResponse } from '@api/habits/types';

export const getHabitsDoc = (userId: string) => doc(FIRESTORE_DB, 'habits', userId);

export function useGetHabits(userId: string) {
  const { data: habitsResponse, isLoading } = useQuery<HabitsResponse>(
    ['habits', userId],
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

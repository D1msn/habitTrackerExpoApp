import { useMutation, useQueryClient } from '@tanstack/react-query';
import { arrayUnion, doc, increment, updateDoc } from 'firebase/firestore';
import { Habit } from '@api/habits/types';
import { QUERY_KEYS } from '@app/utils/queryKeys';
import { useAuthContext } from '@app/providers/AuthProvider/AuthContextProvider';
import { FIRESTORE_DB } from '@src/firebaseConfig';
import { Box, useToast } from 'native-base';

export function useAddHabits({ onSuccess }: { onSuccess?: () => void }) {
  const toast = useToast();
  const { userInfo } = useAuthContext();
  const queryClient = useQueryClient();
  const { mutate: addHabit, isLoading } = useMutation(
    (request: Habit) => {
      return updateDoc(doc(FIRESTORE_DB, QUERY_KEYS.Habits, userInfo.uid), {
        totalCount: increment(1),
        habits: arrayUnion(request),
      });
    },
    {
      onSuccess: async () => {
        toast.show({
          placement: 'top',
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                Привычка создана!
              </Box>
            );
          },
        });
        await queryClient?.invalidateQueries([QUERY_KEYS.Habits]);
        onSuccess?.();
      },
    }
  );

  return {
    addHabit,
    isLoading,
  };
}

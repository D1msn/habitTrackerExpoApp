import { doc } from 'firebase/firestore';
import { FIRESTORE_DB } from '@src/firebaseConfig';

export const getHabitsDoc = (userId: string) => doc(FIRESTORE_DB, 'habits', userId);

// userStore.js
import { create } from 'zustand';

// userTypes.ts
export interface User {
    id: string
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
    image: string;
}



interface UserState {
    userData: User | null;
    setUserData: (data: User | null) => void;
}

const useUserStore = create<UserState>((set) => ({
    userData: null,
    setUserData: (data) => set({ userData: data }),
}));

export default useUserStore;

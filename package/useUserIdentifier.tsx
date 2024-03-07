import {create} from "zustand";

type UserIdentifier = {
    id: string | null;
    setUserIdentifier: (id: string | null) => void;
}

export const useUserIdentifier = create<UserIdentifier>((set)=>({
    id: null,
    setUserIdentifier: (id: string | null) => set({id}),
}));
import { create } from "zustand";

interface IStore {
  num: number;
  increase: (by: number) => void;
  name: string;
  changeName: (name: string) => void;
}

export const useIStore = create<IStore>()((set) => ({
  num: 0,
  increase: () => set((state) => ({ num: state.num + 1 })),
  name: "",
  changeName: (name) => set({ name }),
}));

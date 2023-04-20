import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

let state = (set) => ({
  user: '',
  setUser: (data) => set(() => ({ user: data })),

  seminar: '',
  setSeminar: (data) => set(() => ({ seminar: data })),

  notice: '',
  setNotice: (data) => set(() => ({ notice: data })),
});

state = persist(state, { name: 'semo', getStorage: () => localStorage });

const useStore = create(devtools(state));

export default useStore;
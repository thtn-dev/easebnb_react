import { create } from "zustand"

type State = {
  username?: string,
  avatar?: string,
}

const initialState: State = {
  username: undefined,
  avatar: undefined,
}

type Actions = {
  login: (username: string, avatar: string) => void,
  logout: () => void,
}

const useAuthStore = create<State & Actions>((set) => ({
  ...initialState,
  login: (username, avatar) => set({ username, avatar }),
  logout: () => set(initialState),
}));

export default useAuthStore;
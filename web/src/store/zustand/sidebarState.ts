import { create } from "zustand";
type sidebarStateType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
};

export const sidebarState = create<sidebarStateType>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

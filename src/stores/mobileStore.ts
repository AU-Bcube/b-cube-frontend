import { create } from "zustand";

interface StoreState {
  isMobile: boolean;
  isSidebarOpen: boolean;
  setMobileState: (isMobile: boolean) => void;
  checkMobile: () => void;
  toggleSidebar: () => void;
}

const mobileStore = create<StoreState>((set) => ({
  isMobile: false,
  isSidebarOpen: false,

  setMobileState: (isMobile: boolean) => set({ isMobile }),

  checkMobile: () => {
    if (typeof window !== "undefined") {
      const isMobileScreen = window.innerWidth <= 767;
      set({ isMobile: isMobileScreen });
    }
  },

  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default mobileStore;

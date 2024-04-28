import { createAppStore } from "./utils";

const initialState: any = {
  carsData: [],
  isMenuOpen: false,
  selectedCarData: undefined,
  setCarsData: () => {},
};
const CarStore: any = (set: any) => {
  return {
    ...initialState,
    setCarsData: (whatToSet: string, data: any) => {
      set((state: any) => ({
        ...state,
        [whatToSet]: data,
      }));
    },
  };
};

export const useCarStore = createAppStore(CarStore, {
  usePersistentStore: false,
});

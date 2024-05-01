export interface PickupDropFormType {
  title?: string;
  isPickup: boolean;
  location?: string;
  date?: string;
  time?: string;
  onLocation?: (value: any) => void;
  onDatesChange?: (value: any) => void;
  onTimeChange?: (value: any) => void;
}

import { createContext, Dispatch, SetStateAction } from "react";

interface LocationType {
    lat: number;
    lng: number;
  }
  
  interface GeometryType {
    location: LocationType;
  }
  
  export interface BusinessType {
    name: string;
    place_id: string;
    geometry: GeometryType;
    // Add any other props you're using
  }
  
  interface SelectedBusinessContextType {
    selectedBusiness: BusinessType | null;
    setSelectedBusiness: Dispatch<SetStateAction<BusinessType | null>>;
  }
  
  export const SelectedBusinessContext = createContext<SelectedBusinessContextType>({
    selectedBusiness: null,
    setSelectedBusiness: () => {},
  });
  
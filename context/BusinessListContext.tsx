import { createContext, Dispatch, SetStateAction } from "react";

interface BusinessListContextType {
  businessList: any[];
  setBusinessList: Dispatch<SetStateAction<any[]>>;
}

export const BusinessListContext = createContext<BusinessListContextType>({
  businessList: [],
  setBusinessList: () => {},
});
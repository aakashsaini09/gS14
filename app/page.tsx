'use client'
import BusinessList from "@/components/BusinessList";
import CategoryList from "@/components/CategoryList"; 
import SearchIcon from "@/components/SearchIcon";
import Sidebar from "@/components/Sidebar";
import GlobleApi from '../services/GlobleApi'
import { useEffect, useState } from "react";

export default function Home() {
  const [businessList, setBusinessList] = useState([])
  useEffect(() => {
    getNearByPlace()
  }, [])
  
  const getNearByPlace = () => {

    GlobleApi.getNearByPlaces('gas_station', '35.5827712', '-80.8484864')
    .then(resp =>{
      // console.log("response in page.tsx: ", resp)
      setBusinessList(resp.data.results)
    })
  }
  return (
    <div className="flex">
      <Sidebar/>
      <div className="text-black grid grid-cols-1 md:grid-cols-2 px-6 w-full mt-10">
         {/* Business List */}
         <div>
          <SearchIcon/>
          <CategoryList/>
          <BusinessList businessListData={businessList}/>
         </div>
         {/* Gpogle Map */}
         <div> Gpogle Map</div>
      </div>
    </div>
  );
}

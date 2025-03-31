import Homepage from "@/components/Homepage";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="text-black grid grid-cols-1 md:grid-cols-2">
         {/* Business List */}
         <div>Business List</div>
         {/* Gpogle Map */}
         <div> Gpogle Map</div>
      </div>
    </div>
  );
}

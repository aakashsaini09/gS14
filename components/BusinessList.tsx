"use client";

import React, { useContext, useEffect, useState } from "react";
import BusinessItem from "./BusinessItem";
import Loading from "./Loading";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";
import { BusinessListContext } from "@/context/BusinessListContext";

const BusinessList = ({businessListData}: {businessListData:any}) => {
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(true);

  const { businessList } = useContext(BusinessListContext);
  const {selectedBusiness, setSelectedBusiness} = useContext(SelectedBusinessContext)

  // Show loader initially for 2s
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Reset count and show loader again when business list updates
  useEffect(() => {
    setCount(0);
    setLoader(true);
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [businessList]);

  return (
    <div>
      <h2 className="text-[20px] mt-3 font-bold mb-3 flex justify-between items-center">
        Top NearBy Places
        <span className="flex">
          {count > 0 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setCount(count - 3)}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setCount(count + 3)}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 p-2 text-gray-400 hover:text-purple-500 hover:bg-purple-100 cursor-pointer rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </h2>

      {!loader ? (
        <div>
          {businessList
            .slice(count, count + 3)
            .map((business: any, index: number) => (
              <div
                key={index}
                className={`cursor-pointer rounded-2xl ${selectedBusiness?.name == business.name ? 'bg-purple-100': null}`}
                onClick={() => setSelectedBusiness(business)}
              >
                <BusinessItem business={business} />
              </div>
            ))}
        </div>
      ) : (
        [1, 2, 3].map((item, index) => <Loading key={index} />)
      )}
    </div>
  );
};

export default BusinessList;

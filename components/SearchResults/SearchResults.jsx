'use client'

import { Suspense, useContext } from "react"
import { SearchContext } from "@/containers"
import { Loading } from ".."
import Image from "next/image"

export default function SearchResults() {
  const { addressInfo, storesList } = useContext(SearchContext)
  console.log(storesList)
  return (
    <div className="flex flex-col w-full border-t border-gray-200 p-4 mt-4">
      <h4 className="text-gray-500 text-sm italic">Search results for</h4>
      <h3 className="text-orange-700 text-2xl font-bold">{addressInfo.primaryText}</h3>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col border-b border-gray-200">
          {storesList.map((result, ix) => (
            <div
              key={`${ix} ${result.fsq_id}`}
              className="flex border-t border-gray-200 shadow-sm my-3 p-4"
            >
              <div className="relative h-48 w-64 rounded-lg" >
                <Image src={result.imgUrl} fill alt={`${result.name}`} objectFit="cover" />
              </div>
              <div className="w-full mx-4 flex flex-col justify-center">
                <h5 className="text-green-700 font-bold text-xl">{result.name}</h5>
                <span className="text-gray-500 font-normal italic text-sm">{result.location.address} - {result.location.country}</span>
              </div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  )
} 

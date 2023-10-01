'use client'

import { Suspense, useContext } from "react"
import { SearchContext } from "@/containers"
import { Loading } from ".."
import Image from "next/image"
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

export default function SearchResults() {
  const { addressInfo, storesList } = useContext(SearchContext)

  return (
    <>
      <div
        className="flex flex-col items-start w-full m-4 pl-4"
        style={{ height: 'calc(100vh - 290px)' }}
      >
        <div className="pb-2 border-b w-full">
          <h4 className="text-gray-500 text-sm italic">Search results for</h4>
          <h3 className="text-orange-700 text-2xl font-bold">{addressInfo.primaryText}</h3>
        </div>
        <Suspense fallback={<Loading />}>
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                itemCount={storesList.length}
                itemSize={225}
                width={width}
              >
                {
                  ({ index, style }) => {
                    return (
                      <div
                        key={`${index} ${storesList[index].fsq_id}`}
                        className="flex border-gray-200 shadow-sm my-3 p-4"
                        {...{ style }}
                      >
                        <div className="relative h-48 w-64 rounded-lg" >
                          <Image
                            src={storesList[index].imgUrl}
                            fill
                            alt={`${storesList[index].name}`}
                            objectFit="cover" sizes=""
                            className="rounded-lg shadow-md"
                          />
                        </div>
                        <div className="w-full mx-4 flex flex-col justify-center">
                          <h5 className="text-green-700 font-bold text-xl">{storesList[index].name}</h5>
                          <span className="text-gray-500 font-normal italic text-sm">{storesList[index].location.address} - {storesList[index].location.country}</span>
                        </div>
                      </div>
                    )
                  }
                }
              </List>
            )}
          </AutoSizer>
        </Suspense>
      </div>
    </>
  )
}
/*
  <div className="flex flex-col border-b border-gray-200">
  {storesList.map((result, ix) => (
    <div
    key={`${ix} ${result.fsq_id}`}
    className="flex border-t border-gray-200 shadow-sm my-3 p-4"
    >
    <div className="relative h-48 w-64 rounded-lg" >
    <Image src={result.imgUrl} fill alt={`${result.name}`} objectFit="cover" sizes="" />
    </div>
    <div className="w-full mx-4 flex flex-col justify-center">
    <h5 className="text-green-700 font-bold text-xl">{result.name}</h5>
    <span className="text-gray-500 font-normal italic text-sm">{result.location.address} - {result.location.country}</span>
    </div>
    </div>
  ))}
  </div>
*/

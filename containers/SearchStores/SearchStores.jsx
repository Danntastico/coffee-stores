'use client'

import { SearchByAddress, SearchResults } from "@/components"
import { FOURSQUARE_API_URL, fetchAutoComplete, fetchStoresByLL } from "@/lib/foursquare"
import { createContext, useEffect, useState } from "react"
import useSWRMutation from "swr/mutation"

export const SearchContext = createContext()


export default function SearchStores() {
  const { data: addressesList, trigger } = useSWRMutation(FOURSQUARE_API_URL, fetchAutoComplete)
  const { data: storesList, trigger: triggerByLL } = useSWRMutation('places/search', fetchStoresByLL)
  const [addressInfo, setAddressInfo] = useState(null)

  const handleSearchInputChange = async (query) => {
    trigger(query)
  };

  useEffect(() => {
    if (!addressInfo) return;
    triggerByLL({ ...addressInfo.center })
  }, [addressInfo, triggerByLL])

  return (
    <SearchContext.Provider
      value={{
        addressInfo,
        addressesList,
        storesList,
        handleSearchInputChange,
        setAddressInfo
      }}>
      <SearchByAddress />
      {storesList && <SearchResults />}
    </SearchContext.Provider>
  )
}

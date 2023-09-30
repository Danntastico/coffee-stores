'use client'

import { SearchByAddress } from "@/components"
import { FOURSQUARE_API_URL, fetchAutoComplete, fetchStoresByLL } from "@/lib/foursquare"
import { createContext, useEffect, useState } from "react"
import useSWRMutation from "swr/mutation"

export const SearchContext = createContext()


export default function SearchStores() {
  const { data: addressesList, trigger } = useSWRMutation(FOURSQUARE_API_URL, fetchAutoComplete)
  const { data: storesList, trigger: triggerByLL } = useSWRMutation('places/search', fetchStoresByLL)
  const [addressInfo, setAddressInfo] = useState(null)

  console.log(addressInfo)
  const handleSearchInputChange = async (e) => {
    const query = e.target.value;
    trigger(query)
  };

  useEffect(() => {
    if (!addressInfo) return;
    triggerByLL({ ...addressInfo.center })
  }, [addressInfo, triggerByLL])

  return (
    <SearchContext.Provider value={{ addressesList, handleSearchInputChange, setAddressInfo }}>
      <SearchByAddress />
      <div>

      </div>
    </SearchContext.Provider>
  )
}

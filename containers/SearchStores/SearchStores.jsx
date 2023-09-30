'use client'

import { SearchByAddress } from "@/components"
import { FOURSQUARE_API_URL, fetchAutoComplete } from "@/lib/foursquare"
import { createContext } from "react"
import useSWRMutation from "swr/mutation"

export const SearchContext = createContext()


export default function SearchStores() {
  const { data, trigger } = useSWRMutation(FOURSQUARE_API_URL, fetchAutoComplete)

  const handleSearchInputChange = async (e) => {
    const query = e.target.value;
    trigger(query)
  };

  return (
    <SearchContext.Provider value={{ data, handleSearchInputChange }}>
      <SearchByAddress />
    </SearchContext.Provider>
  )
}

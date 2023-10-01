'use client'

import { useContext } from "react";
import { IconSearch } from '@tabler/icons-react';
import { SearchContext } from "@/containers";
import { Autocomplete } from '@mantine/core';

export default function SearchByAddress() {
  const { addressesList, handleSearchInputChange, setAddressInfo } = useContext(SearchContext)
  
  const handleItemClick = (address) => {
    const data = addressesList.places.find((item) => item.value === address)
    setAddressInfo(data)
  }
  return (
    <div className={styles.container}>
      <Autocomplete
        placeholder="Search stores by address"
        data={addressesList?.suggestions || []}
        onChange={handleSearchInputChange}
        onOptionSubmit={(value) => handleItemClick(value)}
      />

    </div>
  )
}

const styles = {
  container: "relative w-full max-w-md mt-5",
}


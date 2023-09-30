'use client'

import { useContext } from "react";
import { IconSearch } from '@tabler/icons-react';
import { SearchContext } from "@/containers";

export default function SearchByAddress() {
  const { addressesList, handleSearchInputChange, setAddressInfo } = useContext(SearchContext)

  const handleItemClick = (data) => {
    setAddressInfo(data)
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search stores by address"
        className={`${styles.input} ${styles.inputFocus}`}
        onChange={handleSearchInputChange}
      />
      <IconSearch className={styles.svg} />
      {
        addressesList && addressesList.length && (
          <ul className={styles.dropdown}>
            {addressesList.map((item, ix) => (
              <li
                key={`${ix} ${item.primaryText}`}
                className={styles.dropdownItem}
                onClick={() => handleItemClick(item)}
              >
                <span>{item.primaryText}</span>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

const styles = {
  input: "text-gray-700 w-full h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-200",
  svg: "absolute right-3 top-3 h-4 w-4 text-gray-400",
  container: "relative w-full max-w-md mt-5",
  dropdown: "absolute w-full top-8 p-2 text-gray-400 font-semibold border-x border-b rounded-b-lg border-gray-300 bg-white",
  dropdownItem: "p-2 hover:bg-gray-200 cursor-pointer"
}


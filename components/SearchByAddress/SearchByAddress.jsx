'use client'

import { useState } from "react";
import { IconSearch } from '@tabler/icons-react';

export default function SearchByAddress() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
console.log(searchTerm)
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search stores by address"
        className={`${styles.input} ${styles.inputFocus}`}
        onChange={handleSearchInputChange}
        value={searchTerm}
      />
      <IconSearch className={styles.svg} />
      <div className={styles.dropdown}>
        this is an autocomplete list
      </div>
    </div>
  )
}

const styles = {
  input: "text-gray-700 w-full h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-200",
  svg: "absolute right-3 top-3 h-4 w-4 text-gray-400",
  container: "relative w-full max-w-md mt-5",
  dropdown:"absolute w-full -bottom-7 p-2 text-gray-400 font-semibold border-x border-b rounded-b-lg border-gray-300 bg-white" 
}


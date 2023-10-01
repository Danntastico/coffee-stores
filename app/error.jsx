'use client'

import { Button } from "@mantine/core"
import { useEffect } from "react"

export default function Error({ error, reset }) {

  useEffect(() => {
    console.error(error)
  }, [error])

  const handleErrorCLick = () => reset();

  return (
    <div
      className="flex flex-col align-middle items-center justify-center"
      style={{ height: `calc(100vh - 70px)` }}
    >
    <h1 className="text-green-700 text-8xl lg:text-9xl font-black m-3">Ooops!</h1>
      <h2 className="text-gray-400 text-xl m-3">Something went wrong!</h2>
      <Button onClick={handleErrorCLick} className="m-5" color="gray">Try again</Button>
    </div>
  )
}

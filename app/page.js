import { getListOfCoffeeStorePhotos } from '@/lib/unsplash'
import { fetchStoresByPlace } from 'lib/foursquare'

export default async function Home() {
 // const data = await fetchStoresByPlace();

  const data = await getListOfCoffeeStorePhotos()

  console.log(data)
  return (
    <>
      <header className="text-orange-700 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-black uppercase md:text-6xl">
            <span className='text-green-700'>Coffee </span>Discover!
          </h1>
          <h2 className="mt-4 text-xl capitalize mt-0 mx-2 ">Find the best coffee stores near you and explore a world of caffeine delights.</h2>
        </div>
      </header>
    </>
  )
}

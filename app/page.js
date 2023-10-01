import { CoffeeCard } from '@/components'
import { fetchStoresByPlace } from 'lib/foursquare'

export default async function Home() {
  const data = await fetchStoresByPlace();
  return (
    <>
      <header className="py-6">
        <div className="container mx-auto text-center text-orange-700">
          <h1 className="text-4xl font-black uppercase md:text-6xl">
            <span className='text-green-700'>Coffee </span>Discover!
          </h1>
          <h2 className="mt-4 text-xl capitalize mt-0 mx-2 ">Find the best coffee stores near you and explore a world of caffeine delights.</h2>
        </div>
      </header>
      <div className='flex flex-col mt-10 items-center'>
        <h3 className='my-3 text-orange-700 self-end'>Finding Places Near Bogotá, COL</h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:w-10/12'>
          {
            data.map((item, ix) => <CoffeeCard key={`${ix}-${item.name}`} store={item} />)
          }
        </div>
      </div>
    </>
  )
}

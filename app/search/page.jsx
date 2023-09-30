import { SearchStores } from '@/containers'
import { SearchByAddress } from 'components'

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>
        Search Page
        <span className={styles.span}>:</span>
      </h2>
      <SearchStores />
    </div>
  )
}

const styles = {
  container: "flex justify-center items-center mt-14 flex-col",
  h2: "text-green-700 font-black uppercase text-4xl",
  span: "text-orange-700"
}


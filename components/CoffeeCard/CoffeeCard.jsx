/* 
  const store = {
  id: '4c0b1f8702c9d13a5a1274dd',
  address: 'Calle 11 No 6-50',
  name: 'La Puerta Falsa',
  neighbourhood: '',
  imgUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDg1NDl8MHwxfHNlYXJjaHwxMHx8Y29mZmVlJTIwc2hvcHxlbnwwfHx8fDE2OTU5MzYxNDJ8MA&ixlib=rb-4.0.3&q=80&w=400'
}
*/
export default function CoffeeCard({ store }) {
  return (
    <div className="border-2 rounded-lg border-solid border-green-200 p-4 shadow-green-200/40 lg:max-w-xs text-orange-700">
      <img
        src={store.imgUrl}
        alt={store.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h4 className="text-xl font-bold text-orange-700 mb-2">{store.name}</h4>
        <p className="text-gray-600 truncate" style={{maxWidth:'20ch'}}>{store.address}</p>
        {store.neighbourhood && (
          <p className="text-gray-600">{store.neighbourhood}</p>
        )}
      </div>
    </div>
  )
}

import { getListOfCoffeeStorePhotos } from "./unsplash";

export async function fetchStoresByPlace(near = 'Bogotá, CO') {
  try {
    const searchParams = new URLSearchParams({
      query: 'coffee',
      //ll: '41.8781,-87.6298',
      near,
      open_now: 'true',
      sort: 'DISTANCE'
    });
    const photos = await getListOfCoffeeStorePhotos();
    const results = await fetch(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        }
      }
    );
    const data = await results.json();
    return data.results.map((result, idx) => {
      const neighborhood = result.location.neighborhood;
      return {
        id: result.fsq_id,
        address: result.location.address,
        name: result.name,
        neighbourhood: neighborhood?.length > 0 ? neighborhood[0] : "",
        imgUrl: photos.length > 0 ? photos[idx] : null,
      };
    });
  } catch (err) {
    console.error(err);
  }
}


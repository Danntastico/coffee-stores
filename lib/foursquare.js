import { getListOfCoffeeStorePhotos } from "./unsplash";

export const FOURSQUARE_API_URL = 'https://api.foursquare.com/v3/'

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
      `${FOURSQUARE_API_URL}places/search?${searchParams}`,
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

export async function fetchAutoComplete(_url, { arg }) {
  try {
    const params = {
      query: arg,
      types: 'geo',
    };

    /*
    if (latLng.lat && latLng.lng) {
      params.ll = `${latLng.lat},${latLng.lng}`;
    }
    */
    const searchParams = new URLSearchParams(params).toString();
    const searchResults = await fetch(
      `${FOURSQUARE_API_URL}autocomplete?${searchParams}`,
      {
        method: 'get',
        headers: new Headers({
          Accept: 'application/json',
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY,
        }),
      }
    );

    const data = await searchResults.json();

    // return data.results;
    return data.results.map(place => ({
      primaryText: place.text.primary,
      secondaryText: place.text.secondary,
      latitude: place.geo.center.latitude,
      longitude: place.geo.center.longitude,
    }))
  } catch (error) {
    throw error;
  }
}

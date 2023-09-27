export async function placeSearch() {
  try {
    const searchParams = new URLSearchParams({
      query: 'coffee',
      //ll: '41.8781,-87.6298',
      near: 'Bogotá, CO',
      open_now: 'true',
      sort: 'DISTANCE'
    });
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
    return data;
  } catch (err) {
    console.error(err);
  }
}


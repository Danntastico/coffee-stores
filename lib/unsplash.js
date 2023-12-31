import { createApi } from 'unsplash-js';
import nodeFetch from 'node-fetch';

export const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch,
});

export const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplash.search.getPhotos({
    query: "coffee shop",
    perPage: 30,
    page: Math.floor(Math.random() * 3) + 1
  });
  const unsplashResults = photos.response?.results || [];
  return unsplashResults.map((result) => result.urls["small"]);
};


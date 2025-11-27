export const defaultFetch = async (location: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${location}`, {
    cache: 'no-store',
    headers: {
      Referer: 'http://b-cube.kr',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};

export const defaultFetch = async(location: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_HOST}${location}`, {cache:"no-store"}).then((res) => res.json());
}


import { getInterview, getPhoto } from "@/api";
import ReviewSection from "./components/reviewSection";

export default async function Main() {
  
  const interviews = await getInterview();
  const photos = await getPhoto();

  return (
    <ReviewSection interviews={interviews} photos={photos}/>
  );
}


import { getInterview } from "@/api/interview";
import ReviewSection from "./components/reviewSection";
import { getPhoto } from "@/api/photo";

export default async function Main() {
  
  const interviews = await getInterview();
  const photos = await getPhoto();

  return (
    <ReviewSection interviews={interviews} photos={photos}/>
  );
}

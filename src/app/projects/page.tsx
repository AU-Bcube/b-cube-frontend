import { getDesignton } from "@/api";
import { getSexyIt } from "@/api/sexyIt";
import { getStudy } from "@/api/study";
import { getEtc } from "@/api/etc";
import ProjectSections from "./components/ProjectSections";

export default async function Main() {
  
  const designthon = await getDesignton();
  const sexyIt = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/sexyit`, {cache:"no-store"}).then((res) => res.json());
  const study = await getStudy();
  const etc = await getEtc();

  return (
    <main>
      <ProjectSections designthon={designthon} etc={etc} sexyIt={sexyIt} study={study} />
    </main>
  );
};

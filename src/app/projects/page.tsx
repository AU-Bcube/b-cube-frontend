import { getDesignton } from "@/api";
import ProjectSections from "./components/ProjectSections";
import { getSexyIt } from "@/api/sexyIt";
import { getStudy } from "@/api/study";
import { getEtc } from "@/api/etc";

export default async function Main() {
  
  const designthon = await getDesignton();
  const sexyIt = await getSexyIt();
  const study = await getStudy();
  const etc = await getEtc();

  return (
    <main>
      <ProjectSections designthon={designthon} etc={etc} sexyIt={sexyIt} study={study} />
    </main>
  );
};


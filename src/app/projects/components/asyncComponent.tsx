import { getDesignton } from "@/api";
import { getSexyIt } from "@/api/sexyIt";
import { getStudy } from "@/api/study";
import { getEtc } from "@/api/etc";
import ProjectSections from "./ProjectSections";

export default async function AsyncComponent() {
  
  const designthon = await getDesignton();
  const sexyIt = await getSexyIt();
  const study = await getStudy();
  const etc = await getEtc();

  return (
    <ProjectSections designthon={designthon} etc={etc} sexyIt={sexyIt} study={study} />
  );
};


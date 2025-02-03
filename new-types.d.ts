interface ProjectProps {
  id: number;
  year: number;
  title: string;
  participants: string;
  imagePath: string;
  pdfUrl: string;
}

interface sexyItProps {
  id: number;
  date: string;
  title: string;
  imagePath: string;
  url: string;
}

interface studyProps {
  id: number;
  year: number;
  title: string;
  imagePath: string;
}

interface ProjectSectionsProps {
  designthon: ProjectProps[];
  sexyIt: sexyItProps[];
  study: studyProps[];
  etc: ProjectProps[];
}

export { ProjectSectionsProps, ProjectProps, sexyItProps, studyProps };
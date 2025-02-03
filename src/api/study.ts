import { api } from "./api";

const getStudy = async () => {
  try {
    const response = await api.get("/study");
    return response.data;
  } catch (error) {
    console.error("스터디 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

export { getStudy };
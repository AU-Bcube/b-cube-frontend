import { api } from "./api";

const getInterview = async () => {
  try {
    const response = await api.get("/interview");
    return response.data;
  } catch (error) {
    console.error("인터뷰 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

export { getInterview };


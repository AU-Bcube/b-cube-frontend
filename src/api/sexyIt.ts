import { defaultFetch } from "./api";

const getSexyIt = async () => {
  try {
    const response = await defaultFetch("/sexyit");
    return response;
  } catch (error) {
    console.error("섹시한 IT 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

export { getSexyIt };

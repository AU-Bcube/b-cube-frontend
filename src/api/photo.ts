import { defaultFetch } from "./api";

const getPhoto = async () => {
  try {
    const response = await defaultFetch("/photo");
    return response;
  } catch (error) {
    console.error("사진 데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
};

export { getPhoto };


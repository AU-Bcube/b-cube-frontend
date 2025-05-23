import { defaultFetch } from "./api";

const getContact = async () => {
  try {
    const response = await defaultFetch("/contact");
    return response;
  } catch (error) {
    console.error("연락목록 데이터를 가져오는 중 오류 발생:", error);
    return {id: 0, email: "", kakaotalkLink: "", instagramLink: ""};
  }
};

export { getContact };


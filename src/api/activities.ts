import { defaultFetch } from './api';

const getActivities = async () => {
  try {
    const response = await defaultFetch('/activities');
    return response;
  } catch (error) {
    console.error('활동 데이터를 가져오는 중 오류 발생: ', error);
    return [];
  }
};

export { getActivities };

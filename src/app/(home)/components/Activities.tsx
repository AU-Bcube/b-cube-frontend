import { getActivities } from '@/api';
import ActivityList from './ActivityList';
import Article from '@/components/Article';

// 활동 데이터 타입 정의
interface Activity {
  id: number;
  title: string;
  imagePath: string;
  pdfPath: string;
  description: string;
}

export default async function Activities() {

  const activities: Activity[] = await getActivities();

  return (
    <ActivityList activity={activities}/>
  );
}

import ActivityCard from './ActivityCard';
import { getActivities } from '@/api';
import ActivityList from './ActivityList';

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
    <div>
      <ul className="sr-only"> {/* CSS로 숨김 처리하여 시각적으로 안 보이지만 SEO에 포함됨 */}
        {activities.map((item: Activity) => (
          <li key={item.id}>
            <h5>{item.title}</h5>
            <h6>{item.description}</h6>
          </li>
        ))}
      </ul>
      {activities.length === 0 ? (
        <div>활동 데이터가 없습니다.</div>
      ) : (
        <ActivityList
          activity={activities}
        />
      )}
    </div>
  );
}

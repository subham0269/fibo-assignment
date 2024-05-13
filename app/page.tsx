import Image from "next/image";
import DailyGoalProgress from "./ui/page1/DailyGoalProgress";
import heartGif from '@/public/heart.gif';
import TodaysWorkoutList from "./ui/TodaysWorkoutList";
// List icons imports from public folder
import Vector1 from '@/public/ListIcons/Vector1.svg';
import Vector2 from '@/public/ListIcons/Vector2.svg';
import Vector3 from '@/public/ListIcons/Vector3.svg';
import Vector4 from '@/public/ListIcons/Vector4.svg';
import Vector5 from '@/public/ListIcons/Vector5.svg';
import TrackingSwipe from "./ui/TrackingSwipe";
import TrackGraph from "./ui/TrackGraph";

export default function Home() {

  const completion = [3,10];

  const todaysList = [
    {
      task: 'Workout for 20 mins',
      image: Vector1,
      color: 'bg-[#9E4CB8]'
    },
    {
      task: 'Read book for 15 mins',
      image: Vector2,
      color: 'bg-[#DE6C53]'
    },
    {
      task: '30 mins walk',
      image: Vector3,
      color: 'bg-[#81B47D]'
    },
    {
      task: 'Sleep at 11 sharp',
      image: Vector4,
      color: 'bg-[#63A7A7]'
    },
    {
      task: 'Drink 3L water',
      image: Vector5,
      color: 'bg-[#5A92CB]'
    }
  ]
  
  return (
    <main className="text-white space-y-5 mb-20">
      <DailyGoalProgress completionRecord={completion}/>
      <div className="flex justify-between">
        <p>Today's Goal</p>
        <Image src={heartGif} width={36} height={28} alt="heart-beat-gif"/>
      </div>
      <TodaysWorkoutList list={todaysList}/>
      <TrackingSwipe/>
      <TrackGraph/>
    </main>
  );
}

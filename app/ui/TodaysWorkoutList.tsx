import TodaysWorkoutItem from "./Components/TodaysWorkoutItem";

export default function TodaysWorkoutList ({list}:{list: any}) {
   return (
      <>
         {list.map((i:any, id:any) => {
            return (
               <TodaysWorkoutItem key={id} taskname={i.task} col={i.color} imageUrl={i.image}/>
            )

         })}
      </>
   )
}
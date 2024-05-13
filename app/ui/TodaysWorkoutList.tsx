import TodaysWorkoutItem from "./Components/TodaysWorkoutItem";

export default function TodaysWorkoutList ({list}) {
   return (
      <>
         {list.map((i, id) => {
            return (
               <TodaysWorkoutItem key={id} taskname={i.task} col={i.color} imageUrl={i.image}/>
            )

         })}
      </>
   )
}
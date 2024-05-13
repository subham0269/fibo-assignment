import Image from "next/image";
import Tick from '@/public/tick.svg';

export default function TodaysWorkoutItem ({taskname, col, imageUrl}) {
   console.log(col);
   
   return (
      <div className="bg-[#282828] rounded-lg p-4 flex justify-between">
         <div className="flex justify-start items-center space-x-3">
            <div className={`p-2 bg-[#3D3D3D] rounded-lg`}>
               <Image src={imageUrl} width={14} height={18} alt="icon"/>
            </div>
            <p>{taskname}</p>
         </div>
         <div>
            <div className={`p-2 ${col} rounded-lg`}>
               <Image src={Tick} alt="tick-icon" />
            </div>
         </div>
      </div>
   )
}
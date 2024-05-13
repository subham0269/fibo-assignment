import Image from "next/image";
import bullseye from '@/public/bullseye.svg';
export default function DailyGoalProgress({completionRecord} : {completionRecord: number[]}) {
   console.log(completionRecord);
   
   const percentage = (completionRecord[0]/completionRecord[1])*100;
   console.log(percentage);
   

   return (
      <div className="bg-gradient-to-l from-[#0E77D9] to-[#7DA7CE] w-full py-3 px-5 rounded-xl flex items-center justify-around space-x-2">
         <Image src={bullseye} width={60} height={60} alt="bullseye icom" />
         <div className="flex-1">
            <p className="font-bold text-sm">Your Daily Goal Almost Done</p>
            <p className="p-0 m-0 font-normal text-xs">{completionRecord[0]} out of {completionRecord[1]} completed</p>
            <div>
               <div>
                  <span id="ProgressLabel" className="sr-only">Loading</span>
                  <span
                     className="block rounded-sm bg-[#FFFFFF33]"
                  >
                     <span className="block h-1 rounded-sm bg-white mt-1" style={{width: `${percentage}%`}}></span>
                  </span>
               </div>
               <p className="text-right text-xs mt-1">{percentage}%</p>
            </div>
         </div>
      </div>
   )
}
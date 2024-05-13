'use client';

import Navlinks from "./Navlinks";

export default function BottomNav () {
   return (
      <>
         <div className="fixed bottom-0 left-x-0 px-3 py-3 bg-[#242424] w-full max-w-[360px] mx-auto z-20">
            <div className="flex justify-around">
               <Navlinks/>
            </div>
         </div>
      </>
   )
}
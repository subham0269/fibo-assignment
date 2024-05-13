import Arrow from '@/public/right-arrow.svg'
import Image from 'next/image'
export default function TrackingSwipe() {
   return (
      <>
         <div className="rounded-full bg-[#D15439] flex justfy-between p-2 w-full">
            <div className='w-10 h-10  rounded-full bg-white flex justify-center items-center text-[10px] font-bold text-[#D15439]'>Track</div>
            <div className='flex-1 flex justify-between items-center'>
               <p className='text-center w-full font-semibold'>Swipe to track all</p>
               <Image src={Arrow} width={50} height={50} alt='right-arrow-icon'/>
            </div>
         </div>
      </>
   )
}
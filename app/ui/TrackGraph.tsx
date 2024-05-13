export default function TrackGraph() {
   const graphData = [
      {
         date: '28/4',
         val: 92
      },
      {
         date: '30/4',
         val: 100
      },
      {
         date: '02/5',
         val: 98
      },
      {
         date: '05/5',
         val: 90
      },
      {
         date: '11/5',
         val: 84
      },
      {
         date: '15/5',
         val: 82
      },
      {
         date: '15/5',
         val: 80
      },
      {
         date: '22/5',
         val: 80
      }
   ]
   const height = `h-[150px]`;

   const maxVal = Math.max(...graphData.map(data => data.val));

   return (
      <>
         <div className="bg-[#282828] p-4 rounded-lg flex flex-row-reverse justify-between space-x-2">
            <div className={`flex-1 justify-around flex space-x-1 items-end ${height}`}>
               {graphData.map((data,id) => (
                  <div key={id} className="flex flex-col items-center">
                     <p className="text-[8px]">{data.val}</p>
                     <div
                        className="w-4 rounded-sm bg-[#5A92CB]"
                        style={{ height: `${(data.val / maxVal) * 100 + 20}px` }}
                     ></div>
                     <p className="text-[9px] text-gray-400 sm:rotate-0 pt-1">
                        {data.date}
                     </p>
                  </div>
               ))}
            </div>

            <div className="pb-4 flex flex-col space-y-3 text-[10px]">
               <p>100%</p>
               <p>80%</p>
               <p>60%</p>
               <p>40%</p>
               <p>20%</p>
            </div>
         </div>
      </>
   )
}
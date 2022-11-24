import {useRouter} from 'next/router'
import { useState } from 'react';



function Insert() {
  const router = useRouter();
  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  function addRecord(){
    //   console.log(name);
    //   console.log(marks);      
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='bg-gray-400 w-[400px] flex flex-col items-center justify-center p-5 gap-3' >
            <h3>Add Details</h3>
            <input 
                type="text" 
                placeholder='Enter Name' 
                className='w-full border-none outline-none px-5 py-1' 
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <input 
                type="number" 
                placeholder='Enter Marks' 
                className='w-full border-none outline-none px-5 py-1' 
                value={marks}
                onChange={(e)=>setMarks(e.target.value)}
            />
            <button 
                className='bg-blue-500 text-white w-full rounded-full py-2'
                onClick={addRecord}
            >Add</button>
        </div>
        <button
            className='underline font-bold text-blue-300'
            onClick={() => router.push('/')}
        >Back</button>
    </div>
  )
}

export default Insert
import { useRouter } from 'next/router'


function Index() {  
  const router = useRouter();
  
  function fun(){
    router.push("/insert");
  }

  return (
    <div className="w-full h-full pt-5">
      <div className="w-9/12 mx-auto ">
        <button 
          className="bg-blue-500 text-white py-2 px-7 rounded-md hover:bg-blue-600" 
          onClick={ () => fun() }
        >Insert</button>
        
        <table className="bg-white w-full text-center mt-3">
          <thead className="bg-gray-400 h-10">
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b h-10">
              <td>JOhn</td>
              <td>65</td>
              <td>
                <button
                  className='bg-green-500 text-white py-2 px-7 rounded-md hover:bg-green-600'
                  onClick={() => router.push('/update/'+"e1")}
                >Update</button>
                <button
                  className='bg-red-500 text-white py-2 px-7 rounded-md hover:bg-red-600 ml-3'
                >Delete</button>
              </td>
            </tr>            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Index
import React from "react";




const  ListHeader = ()=> {
  return (
    <div className='flex mx-auto text-center border rounded border-blue-600 bg-blue-600 text-white mt-4  '>
        <h3 className='flex-auto text-left pl-2'>Task Name</h3>
        {/* <h3 className='mx-auto'>Description</h3> */}
        {/* <h3 className='flex-auto  px-4'>Percentage Completed</h3> */}
        <h3 className="flex-end  pr-2">Complete Task</h3>
        </div>
  )
}

export default ListHeader;
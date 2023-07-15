import React from "react";




const  ListHeader = ()=> {
  return (
    <div className='flex mx-auto text-center border rounded border-blue-600 bg-blue-600 text-white mt-4  '>
        <h3 className='mx-auto'>Task Name</h3>
        {/* <h3 className='mx-auto'>Description</h3> */}
        <h3 className='mx-auto'>Percentage Completed</h3>
        </div>
  )
}

export default ListHeader;
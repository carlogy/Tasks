
import React from 'react';

function Taskform() {
  return (
    <div className=' flex-row text-center'>
        <form>
            <div className='inline-flex'>
            <label for='task' >Task Name: </label>
            <input type='text' id='task' autoComplete='off'></input>
            </div>
            <div className='inline-flex'>
                <label for='notes' >Notes: </label>
                <input type='text' id='notes' autoComplete='off'></input>
            </div>
            <div className='inline-flex'>
            <label for='percent' >Percentage completed: </label>
            <input type='range' id='percent'  min={0} max={100} step={25}></input>
            </div>
            <div className=' '>
            <button type='submit' className='rounded  bg-blue-600 border border-blue-600 text-white'>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default Taskform
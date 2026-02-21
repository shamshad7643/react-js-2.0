import React from 'react'

const Card = (props) => {
  console.log();
  return (
    <div className='px-5 py-3 w-40 h-40 text-black rounded font-semibold  m-3 border-2 border-red-500  bg-white'>
      <h1 className='text-3xl font-semibold'>
         {props.user}
      </h1>
    </div>
  )
}

export default Card
import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-amber-50 py-3 px-4 w-fit rounded-2xl m-2'>
        <h1>
            {props.text}
        </h1>
    </div>
  )
}

export default Button
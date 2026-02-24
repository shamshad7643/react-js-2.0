import React from 'react'

const Navbar = (props) => {
    
  return (
    <div>
      <div style={{backgroundColor:props.color}} className='flex items-center text-white px-8 py-4 justify-between mb-1'>
        <h2>{props.title}</h2>

        <div className='flex gap-4'>
            {props.links.map(function(e,idx){
                return <h4 key={idx}>{e}</h4>
            })}
        </div>
      </div>

     
    </div>    
  )
}

export default Navbar
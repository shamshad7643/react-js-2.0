import React from 'react'

const User = ({elem}) => {
  return (
    <div className='user-card'>
        <h3>{elem.name}</h3>
        <p>{elem.email}</p>
        <p>{elem.phone}</p>
    </div>
  )
}

export default User


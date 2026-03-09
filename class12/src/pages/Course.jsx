import React from 'react'
import { Outlet } from 'react-router-dom'

const Course = () => {
  return (
    <div>


        <h1>CoursePage</h1>
        <div className='sale'>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
            <p>Sale is live</p>
        </div>
        <Outlet />
    </div>
  )
}

export default Course
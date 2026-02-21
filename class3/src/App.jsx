import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {
  const users = ['shaim','fan','man','chetan']
  
  return (
    <div className=' bg-black p-3 text-red-700'>
    {users.map(function(elem){
    return <Card user={elem}/>
    })}

    
    </div>
  )
}

export default App
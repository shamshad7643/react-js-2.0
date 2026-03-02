import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('Form submitted');
    setUsername('')
  }

const [username, setUsername] = useState('')
  return (
    <div>
      <form onSubmit={(e) =>
        submitHandler(e)
      }>
        <input type="text" placeholder='Enter your name'
        value={username}
        required
        onChange={(e) =>{
          setUsername(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
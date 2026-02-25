import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("btn is clicked");
  }
  
  return (
    <div>
      <button 
      //onClick={btnClicked}

      onClick={function(){
        btnClicked()
      }}
      className=' active:scale-95 bg-emerald-600 text-white px-6 py-3 m-3 rounded font-bold'>
        Click to download
        </button>
    </div>
  )
}

export default App
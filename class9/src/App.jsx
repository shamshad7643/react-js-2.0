import axios from "axios";
import { useState } from "react";
import User from "./components/user";

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
    setAllData(resp.data)
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className="all-cards">
        {allData.map((elem) => {
          return <User key={elem.id} elem={elem}/>
        })}
      </div>

    </div>
  )
}

export default App

// lorem picsum 
//json placeholder
//fake storage api
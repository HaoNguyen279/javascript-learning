import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App2() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
          const key = localStorage.getItem("input");
          console.log(key);
          setSearchFilter(key);
          setData(json);
          setFilterData(json);
          setIsLoading(false);
       })
  }, []);


  function handleSearch(e){
    localStorage.setItem("input",e.target.value);
    setSearchFilter(e.target.value);
    console.log(searchFilter);
    setFilterData(data.filter((item)=>{
      return item.title.includes(e.target.value)
    }))
  }
  return (
    <>
      {/* <h1>{data.title}</h1> */}
      <input onChange={handleSearch} value={localStorage.getItem("input")} />
      {/* {
        (!isLoading) ? 
        filterData.map((item)=>{
          return <button key={item.id} onClick={()=>{console.log(item.body)}}>
            {item.title}
          </button>
        }) : 
        <div>Is loading</div> 
      } */}
      <p>Dropdown</p>
      <select name="" id="">
        {(!isLoading) ? 
        filterData.map((item)=>{
            return <option key={item.id} value={item.title}>
                {item.title}
            </option>
        }) :<></>
        }

      </select>
    </>
  )
}

export default App2

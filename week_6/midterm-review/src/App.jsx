import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState("");
  const [searchFilter, setSearchFilter] = useState(localStorage.getItem('input'));
  const [isLoading,setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState("");
  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
          // setSearchFilter(key);
          setData(json);
          if(searchFilter!== null){
            console.log("Local storage item:" + searchFilter);
            
            setFilterData(json.filter((item)=>{
              return item.title.includes(searchFilter)
            }))
          }else{
            setFilterData(json);
          }
          setIsLoading(false);
       })
       
  }, []);

  function handleSearch(e){
    localStorage.setItem("input",e.target.value);
    setSearchFilter(e.target.value);
    // console.log(searchFilter);
    setFilterData(data.filter((item)=>{
      return item.title.includes(e.target.value)
    }))
  }
  return ( 
    <>
      {/* <h1>{data.title}</h1> */}
      <input onChange={handleSearch} value={localStorage.getItem("input")} />
      {
        (!isLoading) ? 
        filterData.map((item)=>{
          return <div key={item.id}>
              {item.title}
          </div>
        }) : 
        <div>Is loading</div> 
      }
    </>
  )
}

export default App

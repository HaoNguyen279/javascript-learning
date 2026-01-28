import { use, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function Bai3() {
    const [array, setArray] = useState([]);
    const [arrayFiltered, setArrayFiltered] = useState([]);
    const [filterName, setFilterName] = useState();

    function handle(event){
        const {name, value} = event.target;
        setFilterName(value);
        setArrayFiltered(array.filter((item) =>{
            if(item.title.toLowerCase().includes(filterName.toLowerCase())) return item;
        }))
    }
    useEffect(() =>{
        const callback = async () =>{
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products)
            setArray(response.data.products);
        }
        callback();
    },[]);
    const defaultTotal = useMemo(() =>{
        return array.reduce((sum, item) => sum + item.price, 0);
    });
    const filteredTotal = useMemo(() =>{
        return arrayFiltered.reduce((sum, item) => sum + item.price, 0);
    })

  return (
    <>
    <h1>Bai 3</h1>
    <p>Name filter</p> <p>{filterName}</p>
    <h3>{defaultTotal}</h3>
    <h3>{filteredTotal}</h3>
    <input type="text" name="" id="" value={filterName} onChange={handle} />
    <div style={{display : 'flex', gap:30}}>
        <div>
            <h3>List products</h3>
            {array.map((item) =>{
                return (
                    <div className='card' key={item.id}>
                        <p>{item.id}. {item.title} | Price: ${item.price}</p>
                    </div>
                )
            })}
        </div>
        <div>
            <h3>List products filtered</h3>
            {arrayFiltered.map((item) =>{
                return (
                    <div className='card' key={item.id}>
                        <p>{item.id}. {item.title} | Price: ${item.price}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Bai3

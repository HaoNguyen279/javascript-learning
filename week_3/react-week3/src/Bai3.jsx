import { use, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function Bai3() {
    const [array, setArray] = useState([]);
    const [filterName, setFilterName] = useState('');

    console.log('Re Render cái --------------------------------------------------------');
    const arrayFiltered = useMemo(() =>{
        console.time('Filter product');
        const res = array.filter( item => item.title.toLowerCase().includes(filterName.toLowerCase()));
        console.timeEnd('Filter product');
        return res;
    }, [array, filterName]);

    const defaultTotal = useMemo(()=>{
        console.time('Calculate total');
        const res = array.reduce((sum, item) => sum + item.price, 0);
        console.timeEnd('Calculate total');
        return res;
    })

    const filteredTotal = useMemo(() =>{
        console.time('Calculate filtered total');
        const res = arrayFiltered.reduce((sum, item) => sum + item.price, 0);
        console.timeEnd('Calculate filtered total');
        return res;
    })


    function handle(event){
        setFilterName(event.target.value);
    }
    useEffect(() =>{
        const callback = async () =>{
            const response = await axios.get('https://dummyjson.com/products');
            console.log(response.data.products)
            setArray(response.data.products);
        }
        callback();
    },[]);


  return (
    <>
    <h1>Bai 3</h1>
    <p>Name filter</p> <p>{filterName}</p>
    <h3> Default total: {defaultTotal}</h3>
    <h3>Filtered total: {filteredTotal}</h3>
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

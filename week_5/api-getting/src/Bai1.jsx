import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react';

function Bai1() {
    const base_url = "https://jsonplaceholder.typicode.com/users";
    const [data,setData] = useState();

    useEffect(() =>{
        try {
            const promise = fetch(base_url);
            promise.then(async (data) =>{
                //  console.log(promise)
                const jsondata = await data.json();
                console.log(jsondata)
                setData(jsondata);
            })
        } catch (error) {
            console.log(error.message);
        }finally{
            console.log("Success!");
        }
    }, [])

    return(
        <div>
        {
          (data) ? (
            data.map((item)=>{
              return (
                <p key={item.id} className="simple-item">Name : {item.name}, email : {item.email}</p>
              )
            })
          ) : (<p className="simple-item">No data</p>)
        }
        </div>
    )
}

export default Bai1

import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";

export default function Bai2(){
    const base_url = "https://jsonplaceholder.typicode.com/users";
    const [data,setData] = useState();
    const [error,setError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() =>{
        async function fetchTest() {
            try {
                const response = await fetch(base_url);
                const data = await response.json();
                setData(data);
                console.log(data)
                console.log(response)
                if(!response.ok){
                    console.log("Error caught!")
                    throw new Error("Fetching error!");
                }
            } catch (error) {
                setError(error.message);
            }
            finally{
                setTimeout(()=>{
                    setIsLoading(false);
                }, 1000)
            }
        }
        fetchTest();


    }, [])

    return(
        <div>
        {
            (isLoading) ? (<p className="simple-item">Loading....</p>) : (

                (error === null) ? (
                    data.map((item)=>{
                        return <div key={item.id} className="simple-item">
                            Name : {item.name}, email : {item.email}
                        </div>
                        })
                ) :


                (<p className="simple-item">{error}</p>)
            )
        }
        </div>
    )
}
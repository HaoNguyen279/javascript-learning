import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Component } from "react";


export default function Bai3(){
    const base_url = "https://jsonplaceholder.typicode.com/users/";
    const [userId,setUserId] = useState(1);
    const [user,setUser] = useState(null);
    const [error,setError] = useState(null);


    useEffect(() =>{
        setError(null);
        console.log(userId);
        console.log(user)
        console.log(error)
        async function fetchTest() {
            try {
                const response = await fetch(base_url + userId);
                const data = await response.json();
                setUser(data);
                if(!response.ok){
                    console.log("Error caught!")
                    throw new Error("Fetching error!");
                }
            } catch (error) {
                setError(error.message);
            }
            // finally{
            //     setTimeout(()=>{
            //         setIsLoading(false);
            //     }, 1000)
            // }
        }
        fetchTest();
    }, [userId])

    return(
        <div>
        <p>Nhap user id vo di:</p>
        <input onChange={(e)=> setUserId(e.target.value)} value={userId}></input>

        {
        (user !== null) ?
        ((error === null) ? 
            (<p>Name:{user.name} ,phone: {user.phone} {user.website}</p>) :
            (<p>Error user not found</p>) 
        ):
        (<p>No user input</p>)
        }
        
        </div>
    )
}
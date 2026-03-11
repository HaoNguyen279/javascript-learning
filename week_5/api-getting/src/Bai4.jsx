import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Component } from "react";

export default function Bai4(){
    const base_url = "https://jsonplaceholder.typicode.com/posts";
    const [posts,setPosts] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(() =>{
        async function fetchPosts() {
            try{
                const response = await fetch(base_url);
                const data = await response.json();
                setPosts(data);
                console.log("Fetch thành công data")
            }
            catch(error){
                console.error(error.message);
            }
        }
        fetchPosts();
    }, [])

    return(
        <>
            <p>Nhap title vo de loc</p>
            <input type="text" onChange={(e) => setFilter(e.target.value)} />
            <p style={{color: "purple"}}>List sau filter :</p>
            {
                posts.filter((item) => item.title.includes(filter)).map((item) => {
                    return <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                })
            }

        </>
    )
}
import React, { useEffect, useState } from 'react'
let getData = async() => {
    let res = await fetch("https://api.github.com/search/repositories?q=user:YashSharma7746+fork:true&sort=updated&per_page=10&type=Repositories");
    let data = await res.json();
    return(data.items);
}

export default function Projects ({final}){
    let [data,setData] = useState([]);
    useEffect(()=>{
        getData()
        .then((res)=>setData(res));
    },[])
    return (
    <div>
        <h1 style={{textAlign:"center"}}>Projects</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
            {data && data.map((repos,i)=>{
                return <a href={repos.html_url}>
                    <div key={i} style={{backgroundColor:"teal",padding:"10px"}}>
                    <h4>{repos.name}</h4>
                    <p>{repos.description}</p>
                    <div style={{display:"flex",gap:"30px"}}>
                        <h5>Wathers {repos.watchers}</h5>
                        <h5>Forks {repos.forks}</h5>
                        <h5 style={{textAlign:"right"}}>Languages {repos.language}</h5>
                    </div>
                </div>
                </a>
            })}
        </div>
    </div>
  )
}


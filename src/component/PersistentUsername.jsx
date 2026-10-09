import  { useEffect, useState } from 'react'

const PersistentUsername= () => {

 const [userName,setUserName]=useState(JSON.parse(localStorage.getItem("Name")).userName || "");
  useEffect(()=>{
    localStorage.setItem("Name",JSON.stringify({userName}));
  },[userName])


  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={(e)=>(setUserName(e.target.value))}
      />
      <h1>{userName}</h1>
    </>
  )
}

export default PersistentUsername
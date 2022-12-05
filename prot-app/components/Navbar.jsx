import React from 'react'
import Link from "next/link"
const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"50px",padding:"10px"}}>
        <Link href={"/"}>Yash Sharma</Link>
        <Link href="/projects">Projects</Link>
    </div>
  )
}

export default Navbar
import React from "react"
import blogData from "../data/blog";


const Articlefunction = ()=>{
     
    const blogs = blogData.posts.map( post=>{
     return(
        <li> 
        <h3> {post.title} </h3>
      <small> {post.date}</small>
    </li>
     ) 
    })
    return(
        <div>
           {blogs}
        </div>
        
         
    )
}
export default Articlefunction
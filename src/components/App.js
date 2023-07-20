import React from "react";
import blogData from "../data/blog";
import Headercomponent from "./header.js"
import Aboutcomponent from "./About.js"
import Articlefunction from "./Article.js"
console.log(blogData);

function App() {
  return (
    <div className="App">

     < Headercomponent />
     < Aboutcomponent  
         about = {blogData.about}
         image ={blogData.image}
     />

     <Articlefunction
       title = {blogData.posts.title}
       date = {blogData.posts.date}  
     />
    </div>
  );
}

export default App;

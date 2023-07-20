import blogData from "../data/blog";

const headerComponent = ()=>{
 return (
    <header>
        <h1> {blogData.name}</h1>
    </header>
 )

}
export default headerComponent
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import './Product.css'
import { useState } from "react"
export const Product = ()=>{
    let idfromlocal = JSON.parse(localStorage.getItem("loginToken"))
    const [product,setProduct]=useState({
        title:"",
        price:null,
        description:'',
        user_id:idfromlocal.user._id

    })
    const submitHandler = (e)=>{
        e.preventDefault()
     console.log(product)
    axios.post("http://localhost:5000/products",product).then((res)=>{
        console.log(res)
    })

    }
   const handleChange = (e)=>{
    setProduct({
        ...product,
        [e.target.name] : e.target.value
    })
   }
    return(
        <>
        <form onSubmit={submitHandler}>
                <h2>Product Details</h2>
                <input id="name" type="text" placeholder="Enter Product Name" style={{border: "1px solid black",padding:"10px"}} name="title" onChange={handleChange}/><br/><br/>
                <input id="number" type="number" placeholder="Enter Product Price" style={{border: "1px solid black",padding:"10px"}} name="price" onChange={handleChange}/><br/><br/>
                <input id="email" type="text" placeholder="Enter Product Description" style={{border: "1px solid black",padding:"10px"}} name="description" onChange={handleChange}/><br/><br/>
                
                <input type="submit" />
            </form>
        </>
    )
}
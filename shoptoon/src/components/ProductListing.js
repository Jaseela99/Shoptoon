
import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import ProductComponent from "./ProductComponent"
import {setProducts} from "../redux/actions/productAction"

const ProductListing = () => {
const dispatch=useDispatch()
const products = useSelector((state)=>state.products)
 
const getProducts= async()=>{
  await fetch('https://fakestoreapi.com/products')
  .then((res)=>(res.json())).then((re)=>dispatch(setProducts((re.data)))).catch((err)=>console.log("err",err))}
 React.useEffect=(()=>{
   getProducts()
  }) 
console.log(products) 
  return (
    <div>
      <h1> Products</h1>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
import React from 'react'
import { useSelector } from 'react-redux'

const ProductComponent = () => {
  const products = useSelector((state=>state))
  console.log(products)
  //const {id,title }=products
  return (
    <div>
      <div>
        <div>
      <div></div>
      <div>
        <div></div>
      </div>
      </div>
      </div>
      </div>
  )
}

export default ProductComponent
import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)

  console.log(products)

  // product component
  const Products = () => {
    return (
      <div>
        <h1>Products</h1>
        {/* <img src={} alt={} />
        <h3>{}</h3>
        <h4>{}</h4> */}
      </div>
    )
  }

  return <div>{loading ? 'loading...' : 'Products'}</div>
}

export default Example

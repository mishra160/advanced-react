import React from 'react'
import Product from './Product'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products, loading } = useFetch(url)

  return (
    <div>
      <h1>Products</h1>
      {loading ? (
        <h4>loading...</h4>
      ) : (
        <section className='products'>
          {products.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </section>
      )}
    </div>
  )
}

export default Index

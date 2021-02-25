import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProduct] = useState([])

  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setLoading(false)
    setProduct(products)
  }, [url])

  useEffect(() => {
    getProducts()
  }, [getProducts, url])
  return { loading, products }
}

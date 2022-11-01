import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from "axios"



const HomeScreen = () => {

  const [products, setproducts] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products')

      setproducts(data);
    }
    fetchData()
  }, [])

  return (
    <>
    
    <h1> Latest Items</h1>
        <Row>
        {products.map((prod) => (
          <Col key={prod._id} sm={12} md={6} lg={4} xl={3} >
            <Product 
              product={prod}
            />
            </Col>
        ))}
        </Row>

    </>
  )
}

export default HomeScreen
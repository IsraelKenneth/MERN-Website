import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)

  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
    
    <h1> Latest Items</h1>
      {loading ? <Loader /> : error ? <Message>{error}</Message> : 
        <Row>
        {products.map((prod) => (
          <Col key={prod._id} sm={12} md={6} lg={4} xl={3} >
            <Product 
              product={prod}
            />
            </Col>
        ))}
        </Row>
      }


    </>
  )
}

export default HomeScreen
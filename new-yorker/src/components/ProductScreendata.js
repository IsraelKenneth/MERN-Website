import React, { useEffect, useState } from 'react'
import "./ProductStyles.css"
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from "axios"


const ProductScreendata = () => {

    const [product, setproduct] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/products/${id}`)
            setproduct(data)
        }
        fetchProduct()
    }, []);


    return (
        <div>

            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>

            <Row className='row-space'>
                <Col md={6}>
                    <Image className='img' src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>
                                {product.name}
                            </h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>
                                Price: ${product.price}
                            </h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h3>
                                Stock: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <button className='btn btn-light my-3'>
                                Add to Cart
                            </button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </div >
    )
}

export default ProductScreendata
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import "./ProductStyles.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Form, Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreendata = () => {

    const navigate = useNavigate()
    const [qty, setQty] = useState(1)

    const { id } = useParams()

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)

    const { product, error, loading } = productDetails
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch, id]);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    }


    return (
        <div>

            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? <Loader /> : error ? <Message>{error}</Message> :
                (<Row className='row-space'>
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
                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                        <ListGroupItem>
                                <Button onClick={addToCartHandler}
                                    className='btn-block'
                                    type='button'
                                    disabled={product.countInStock === 0}>

                                Add to Cart
                                </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                </Row>
                )
            }
        </div>
    )
}

export default ProductScreendata
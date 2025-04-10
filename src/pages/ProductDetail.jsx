import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const ProductDetail = () => {
    let{id} = useParams();
    const [product, setProduct] = useState(null)
    const getProductDetail = async ()=>{
        let url = `https://my-json-server.typicode.com/123hee123/hnm-react-router-practice/products/${id}`
        let response = await fetch(url)
        let data = await response.json();
        setProduct(data)
    }
    useEffect(() => {
        getProductDetail();
    }, []);


    return (
        <Container>
            {/*<Row>*/}
            {/*    <Col className="product-img">*/}
            {/*        <img src={product?.img} alt=""/>*/}
            {/*    </Col>*/}
            {/*    <Col>*/}
            {/*        <div>{product?.title}</div>*/}
            {/*        <div>\{product?.price}</div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row>
                <Col>
                    <img src={product?.img}/>
                </Col>
                <Col>
                    <div className='detail-title'>
                        <h4>{product?.title}</h4>

                    </div>
                    <div className='detail-price'>
                        <h5>{product?.price} KRW</h5>
                    </div>

                    <div>
                        <Form.Select size="sm">
                            <option>-</option>
                            {product?.size.map((size,idx)=>(
                                <option key={idx}>{size}</option>
                            ))}
                        </Form.Select>
                    </div>
                    <div className="d-grid gap-2 mt-2">
                        <Button variant='danger'>추가</Button>
                    </div>


                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
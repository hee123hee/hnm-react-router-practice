import React, {useEffect, useState} from 'react';
import ProductCard from "../components/ProductCard.jsx";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSearchParams} from "react-router-dom";

const ProductAll = () => {
    let [productList, setProductList] = useState([])
    const [query, setQuery] = useSearchParams()

    const getProducts = async () => {
        let searchQuery = query.get("q") || "";
        console.log("쿼리값은", searchQuery)

        let url = `http://localhost:3000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data)
        console.log("data?", data)
    }
    useEffect(() => {
        console.log("검색어 바뀜", query.get('q'))
        getProducts();
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((item) => (
                        <Col key={item.id} lg={3}>
                            <ProductCard item={item}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ProductAll;

import React from 'react';
import { Fragment } from 'react';
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
const ProductDetails = () => {
    const productsArr = [

        {
        id:'1',
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity:0
        
        },
        
        {
            id:'2',
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity:0
        
        },
        
        {
            id:'3',
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity:0
        
        },
        
        {
            id:'4',
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        quantity:0
        
        }
    ]
    const { productid } = useParams();
    console.log(productid,typeof(productid))
    const Product = productsArr.find((Product)=> Product.id===productid)
    console.log(Product)
    
    //     return(
    //         <Fragment>
    //             <Route path='store/0'>
    //                 <h1>Hello</h1>
    //                 <Home/>
    //             </Route>
    //         </Fragment>
    //     )
    // }


    return (
        <Row className="justify-content-md-center" xs={1.8}>
            <Col className="mt-4">
                <div style={{display:'flex'}}>
                    <React.Fragment >
                                    <li>{Product.title}</li>
                                    <img src={Product.imageUrl} alt={Product.title}></img>
                                    <p>$ {Product.price}</p>
                                    {productid==='3' &&
                                        <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZjvyfnD-Iff6hAy9Oep2gqFCJKlcVlmvCyo2JR4pAYpGv1hSb'></img>}

                                    
                    </React.Fragment>

                </div>
            </Col>
            <h1>Reviews</h1>
            <p>Good</p>
        </Row>
    );
}

export default ProductDetails;

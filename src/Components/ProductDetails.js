import React from 'react';
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
    const { productid } = useParams();
    console.log(productid,typeof(productid))

    return (
        <Row className="justify-content-md-center" xs={1.8}>
            <Col className="mt-4">
                <div>
                    {productid === '0' ? (
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <img class='coloumn' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtVh5SIxaMbCN-GDcezRb8kAhq2mN7defizMNmHTPxoY10wP5N'></img>
                        {/* <p>left</p> */}
                        <br></br>
                        <hr></hr>
                        <img class='coloumn' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTijnBbTooCc3j3l0hzllcOFXEgGYPy4yYGRHlY1DBvwQa3Y9pT'></img>
                        <br></br>
                        <hr></hr>
                        <img class='coloumn' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcThE2dncUUnDw61fPJN13hMVMvB4CZnMvJOZWu-i2_2jjyuDHZn'></img>                    
                        </div>
                    ) : (
                        <h1>Other Product</h1>
                    )}
                </div>
            </Col>
            <h1>Reviews</h1>
        </Row>
    );
}

export default ProductDetails;
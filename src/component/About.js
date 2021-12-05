import React from 'react'
import {Row,Col} from 'react-bootstrap'


function About(){

    return(
        <div className="text-center">
            <h2 className="underline">About Us</h2>
            <Row>

                <Col>
                    <h5>Abdelmonem Khedr</h5>
                    <p>Product Analytics, Prototyping, and Web Developer</p>
                </Col>
                <Col>
                    <h5>Jordan Altomare</h5>
                    <p>Product Manager and Developer</p>
                </Col>

            </Row>
        </div>
    )
}

export default About
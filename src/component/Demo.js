import React from 'react'
import Video from './Video'
import {Row,Col} from 'react-bootstrap'

function Demo(){

    return(
        <>
            <div className="text-center">
                <h2 className="underline">Features Demo</h2>
                <Row className="mt-4">
                    <Col>
                        <Video title="Learn Chords(Tap To Change)" link="https://www.youtube.com/embed/YEhbamJPJP0"/>
                    </Col>
                    <Col>
                        <Video title="Learn Chords(Auto Change)" link="https://www.youtube.com/embed/TXDhTLsrHz8"/>
                    </Col>
                    <Col>
                        <Video title="See Specfic Chords" link="https://www.youtube.com/embed/XBT6a0tpou4"/>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Video title="Learn Songs(Free Fallin')" link="https://www.youtube.com/embed/vlTAvscDL74"/>
                    </Col>
                    <Col>
                        <Video title="Learn Songs(Lean On Me)" link="https://www.youtube.com/embed/gdbXcpd_oeo"/>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Demo
import React from 'react'
import {Row,Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic,faEye,faPencilAlt} from '@fortawesome/free-solid-svg-icons'

function Features(){
    return (
        <div className="text-center">
            <h2 className="underline">Application Features</h2> 
            <Row className="mt-4 mb-4 text-center">
                <Col>
                    <h5>Learn Chords <FontAwesomeIcon icon={faPencilAlt} /></h5>
                    <p>Chord up! There are 5 chords you can learn on the application. You can tap to change bettween chords or choose the auto switch option with your prefered speed setting. </p>
                </Col>
                <Col>
                    <h5>See Specfic Chords <FontAwesomeIcon icon={faEye} /></h5>
                    <p>Some chords are a little bit harder to learn than others. We have you covered. With this feature you can press on one of the 5 chords on the application to see how it's played.</p>
                </Col>
                <Col>
                    <h5>Learn Songs <FontAwesomeIcon icon={faMusic} /></h5>
                    <p>Are you too good for chords? Then, lets get jamming. We offer three songs on the application: Happy Birthday, Free Fallin', and Lean on Me. The last one is trickier than the first two, but where there is music there is a way!</p>
                </Col>
            </Row>
        </div>
    )
}

export default Features

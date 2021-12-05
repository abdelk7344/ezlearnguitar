import React from 'react'
import {Card} from 'react-bootstrap'

function Week(props){
    return (
        <Card className="border-0">
            <Card.Body>
                <Card.Title>
                    {props.header}
                </Card.Title>
                <Card.Text id="textLeft">
                    {props.body}
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Week;
import React from 'react'


function Video(props){

    return( 
        <div>
            <h5>{props.title}</h5>
            <div>
                <iframe title={props.title} src={props.link}/>
            </div>
        </div>
    )
}

export default Video
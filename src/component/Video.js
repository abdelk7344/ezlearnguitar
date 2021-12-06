import React from 'react'


function Video(props){

    return( 
        <div>
            <h5>{props.title}</h5>
            <div>
                <iframe allowFullScreen title={props.title} src={props.link}/>
            </div>
        </div>
    )
}

export default Video
import React from 'react'


function Video(props){

    return( 
        <div>
            <h5>{props.title}</h5>
            <div className="embed-responsive embed-responsive-1by1">
                <iframe className="embed-responsive-item" title={props.title} src={props.link}/>
            </div>
        </div>
    )
}

export default Video
import React from 'react'
import Week from './Week'
import {CardGroup} from 'react-bootstrap'

function Blog(){

    return (
        <div className="mt-4 mb-4 text-center">
            <h2 className="underline">Weekly Blog</h2>
            <CardGroup>
                <Week header="Week 1 (11/1)" body="We started brainstorming about the user scenarios we wanted to include in the application. We thought about how the application would be set up and implemented. Since the person will be holding a guitar and interacting with the application on the phone, we wanted to make sure that the interaction was fluid. Next week, we plan to create a cardboard prototype of all the moving components for the application."/>               
                <Week header="Week 2 (11/8)" body="After creating our physical prototype, we decided to change a couple of things in our application implementation. First, we wanted to use the laptop to showcase the phone screen so that the user can view the application more clearly. This is vital because they need to be able to see where exactly to place their fingers to play the right chord. More importantly, we realized the phone camera has to always be at a fixed distance away from the guitar to accurately show the user how to play the chords. We are currently experimenting with a phone holder and trying to see if it would be a valid solution to the distance problem. Additionally, we are finishing up the midterm report and presentation. Next week, we plan to start coding in Reality Composer and XCode to get a better idea of what we need to do to make sure the application is both accurate and accessible."/>
                <Week header="Week 3 (11/15)" body="The phone stand was not a viable solution because that would mean that the user would have to set up the phone stand at a fixed distance away every time and be at the right angle for the application to work. We have been using image anchors which are only supported through the back camera. We wanted to see if it would be possible to access an image anchor with the front camera so that we can solve the angle issue. Face anchoring was the only way to use the front camera on reality composer. To use the front camera, we decided to get a little creative. We printed out pictures of faces and placed them on the guitar. This idea worked but the AR markers on the guitar moved a lot and the camera did not always capture the face image. We decided that we wanted to create a tool that anchored the phone on the guitar and used the phone's back camera."/>
            </CardGroup>
            <CardGroup>
                <Week header="Week 4 (11/22)" body="We are happy to report that finally got the application to work! After many tries, we were able to create a good tool to hold the phone a fixed distance away from the guitar. We are currently in the process of creating all the chord markers on reality composer. The markers are a fixed distance away from the image anchor that we have on the guitar. After creating the five chords, we plan to create three songs for users to learn on the application."/>                
                <Week header="Week 5 (11/29)" body="We have finished creating the markers for all the chords and songs. We are currently finalizing user UI options for speed and pace on the application. For example, we are giving users an option to tap or auto switch to move from one chord to the next(in the learning chords feature). It is notable to note that one of our three songs is a little bit more advanced to play than the other two. The song 'Lean on Me' requires plucking certain strings instead of strumming them. It was hard to find a good way to visually show the user how to play the correct notes for that specific song. It ended up looking like guitar hero which is awesome because a lot of people know how to play the game. We are currently finalizing the application on XCode and working on the presentation."/>
                <Week header="Week 6 (12/6)" body="We are currently working on creating our poster for the poster presentation this Tuesday. We are also finalizing our media materials by creating videos to demonstrate how you would set up the application and the different features of the application. We received a lot of great feedback on how we could improve the application. We hope to continue improving upon the application in the future. Until then, music out! "/>
            </CardGroup>
        </div>
    )
}

export default Blog
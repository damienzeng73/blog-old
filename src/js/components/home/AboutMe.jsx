import React from 'react'
import { Segment } from 'semantic-ui-react'

const AboutMe = () => {
    return (
        <div id='aboutMe'>
            <h2>About me</h2>
            <Segment>
                <p>
                    My name is Damien Zeng, I'm a full-stack web developer, familiar with JavaScript, Python programming language.
                </p>

                <p>
                    This site is built with ReactJS, Flask, using Semantic-ui-React UI framework.
                </p>
            </Segment>
        </div>
    )
}


export default AboutMe

import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import AboutMe from '../components/home/AboutMe'
import ContactMe from '../components/home/ContactMe'

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <h2>About me</h2>
                <AboutMe />

                <Divider section />

                <h2>Contact me</h2>
                <ContactMe />
            </Container>
        )
    }
}


export default HomePage

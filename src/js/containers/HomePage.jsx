import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import AboutMe from '../components/home/AboutMe'
import ContactMe from '../components/home/ContactMe'

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <AboutMe />
                <Divider />
                <ContactMe />
            </Container>
        )
    }
}


export default HomePage

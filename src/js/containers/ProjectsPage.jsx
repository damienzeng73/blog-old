import React from 'react'
import { Container } from 'semantic-ui-react'

import Projects from '../components/Projects'

class ProjectsPage extends React.Component {
    render() {
        return (
            <Container>
                <h2>My projects</h2>
                <Projects />
            </Container>
        )
    }
}


export default ProjectsPage

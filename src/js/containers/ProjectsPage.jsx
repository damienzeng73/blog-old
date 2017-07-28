import React from 'react'
import { Container } from 'semantic-ui-react'

import ProjectsList from '../components/ProjectsList'

class ProjectsPage extends React.Component {
    render() {
        return (
            <Container>
                <h2>My projects</h2>
                <ProjectsList />
            </Container>
        )
    }
}


export default ProjectsPage

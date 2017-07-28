import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ProjectsList from '../components/ProjectsList'
import { fetchProjects } from '../actions/Projects'

class ProjectsPage extends React.Component {
    componentDidMount() {
        this.props.fetchProjects()
    }

    render() {
        return (
            <Container id='projects-page'>
                <h2>My projects</h2>
                <ProjectsList
                    projects={this.props.projects}
                />
            </Container>
        )
    }
}

ProjectsPage.propTypes = {
    projects: PropTypes.array.isRequired,
    fetchProjects: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}


export default connect(mapStateToProps, { fetchProjects })(ProjectsPage)

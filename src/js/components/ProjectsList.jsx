import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'semantic-ui-react'

const ProjectsList = (props) => {
    let projectsCollection = _.map(props.projects, (project, idx) => {
        let tagsCollection = _.map(project.tags, (tag, idx) => {
            return (
                <span key={idx}>{tag}</span>
            )
        })

        return (
            <Card key={idx}>
                <Card.Content>
                    <Card.Header>
                        {project.name}
                    </Card.Header>

                    <Card.Meta>
                        {tagsCollection}
                    </Card.Meta>

                    <Card.Description>
                        {project.description}
                    </Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <div className='ui two buttons'>
                        <a href={project.url} target='_blank'>
                            <Button basic color='green'>Check it out</Button>
                        </a>
                    </div>
                </Card.Content>
            </Card>
        )
    })

    return (
        <Card.Group itemsPerRow={3} stackable>
            {projectsCollection}
        </Card.Group>
    )
}

ProjectsList.propTypes = {
    projects: PropTypes.array.isRequired
}


export default ProjectsList

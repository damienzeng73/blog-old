import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const Projects = () => {
    return (
        <Card.Group itemsPerRow={3}>
            <Card>
                <Card.Content>
                    <Card.Header>
                        Project's name
                    </Card.Header>

                    <Card.Meta>
                        Project's description
                    </Card.Meta>

                    <Card.Description>
                        Project's detail
                    </Card.Description>
                </Card.Content>

                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>Check it out</Button>
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
    )
}


export default Projects

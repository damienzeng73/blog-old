import React from 'react'
import { Container, Button } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Container id='footer' fluid>
            <Button circular color='facebook' icon='facebook f' />
            <Button circular color='linkedin' icon='linkedin' />
            <Button circular color='black' icon='github' />
        </Container>
    )
}


export default Footer

import React from 'react'
import { Container, Button } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Container id='footer' fluid>
            <a href='https://www.facebook.com/profile.php?id=100003107661326' target='_blank'>
                <Button circular color='facebook' icon='facebook f' />
            </a>

            <a href='https://www.linkedin.com/in/%E8%B2%B4%E5%BB%B7-%E6%9B%BE-56920a145/' target='_blank'>
                <Button circular color='linkedin' icon='linkedin' />
            </a>

            <a href='https://github.com/damnee562' target='_blank'>
                <Button circular color='black' icon='github' />
            </a>
        </Container>
    )
}


export default Footer

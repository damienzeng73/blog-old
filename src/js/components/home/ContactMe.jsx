import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

const ContactMe = () => {
    return (
        <Form>
            <Form.Input label='Your name' placeholder='Your name' />
            <Form.Input label='Email address' placeholder='Email address' />
            <Form.TextArea label='Messages' />

            <Button type='submit' primary>
                <Icon name='mail outline' />
                Send email
            </Button>
        </Form>
    )
}


export default ContactMe

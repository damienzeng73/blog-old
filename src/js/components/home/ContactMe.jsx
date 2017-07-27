import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

const ContactMe = () => {
    return (
        <div>
            <h2>Contact me</h2>
            <Form>
                <Form.Field>
                    <label>Your name</label>
                    <input placeholder='Your name' />
                </Form.Field>

                <Form.Field>
                    <label>Email address</label>
                    <input placeholder='Email address' />
                </Form.Field>

                <Form.TextArea label='Messages' />

                <Button type='submit' primary>
                    <Icon name='mail outline' />
                    Send email
                </Button>
            </Form>
        </div>
    )
}


export default ContactMe

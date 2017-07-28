import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Icon } from 'semantic-ui-react'

const ContactMe = (props) => {
    return (
        <Form onSubmit={props.handleOnSubmit}>
            <Form.Input label='Your name' name='name' value={props.name} onChange={props.handleOnChange} placeholder='Your name' />
            <Form.Input label='Email address' name='email' value={props.email} onChange={props.handleOnChange} placeholder='Email address' />
            <Form.TextArea label='Messages' name='message' value={props.message} onChange={props.handleOnChange} />

            <Button type='submit' primary loading={props.isSending}>
                <Icon name='mail outline' />
                Send email
            </Button>
        </Form>
    )
}

ContactMe.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    isSending: PropTypes.bool.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired
}


export default ContactMe

import React from 'react'
import PropTypes from 'prop-types'
import { Container, Divider, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'

import AboutMe from '../components/home/AboutMe'
import ContactMe from '../components/home/ContactMe'
import { sendEmail } from '../actions/Home'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
            isSending: false,
            successMessageVisible: false,
            errorMessageVisible: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnDismiss = this.handleOnDismiss.bind(this)
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOnSubmit(e) {
        e.preventDefault()
        this.setState({ isSending: true })
        this.props.sendEmail(this.state)
            .then((res) => {
                this.setState({ name: '', email: '', message: '', isSending: false, successMessageVisible: true })
            })

            .catch((err) => {
                this.setState({ isSending: false, errorMessageVisible: true })
            })
    }

    handleOnDismiss() {
        this.setState({ successMessageVisible: false, errorMessageVisible: false })
    }

    render() {
        return (
            <Container id='home-page'>
                <h2>About me</h2>
                <AboutMe />

                <Divider section />

                <h2>Contact me</h2>
                <ContactMe
                    name={this.state.name}
                    email={this.state.email}
                    message={this.state.message}
                    isSending={this.state.isSending}
                    handleOnChange={this.handleOnChange}
                    handleOnSubmit={this.handleOnSubmit}
                />

                {this.state.successMessageVisible
                    ?
                        <Message success
                            onDismiss={this.handleOnDismiss}
                            header='Your message has been sent successfully.'
                            content={`I'll respond as soon as possible.`}
                        />
                    :
                        null
                }

                {this.state.errorMessageVisible
                    ?
                        <Message error
                            onDismiss={this.handleOnDismiss}
                            header='Message failed to send.'
                            content='If you are in a hurry, you can send email to damnee562@gmail.com directly.'
                        />
                    :
                        null
                }
            </Container>
        )
    }
}

HomePage.propTypes = {
    sendEmail: PropTypes.func.isRequired
}


export default connect(null, { sendEmail })(HomePage)

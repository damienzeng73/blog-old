import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            addedClass: '',
            activeItem: 'home'
        }

        this.handleOnClick = this.handleOnClick.bind(this)
        this.handleOnScroll = this.handleOnScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    handleOnClick(e, obj) {
        this.setState({ activeItem: obj.name })
    }

    handleOnScroll(e) {
        let addedClass = ''
        if (e.pageY > 0) {
            addedClass = 'small-nav'
        }

        this.setState({ addedClass })
    }

    render() {
        return (
            <Menu id='navbar' className={this.state.addedClass} pointing secondary fluid stackable>
                <Menu.Item as={Link} name='home' to='/' header>
                    <h1>Damien's site</h1>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item as={Link} name='home' to='/' active={this.state.activeItem === 'home'} onClick={this.handleOnClick}>
                        Home
                    </Menu.Item>

                    <Menu.Item as={Link} name='blog' to='/blog' active={this.state.activeItem === 'blog'} onClick={this.handleOnClick}>
                        Blog
                    </Menu.Item>

                    <Menu.Item as={Link} name='projects' to='/projects' active={this.state.activeItem === 'projects'} onClick={this.handleOnClick}>
                        Projects
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}


export default Navbar

import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import BlogList from '../components/blog/BlogList'
import { fetchPosts } from '../actions/Blog'

class BlogPage extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <Container id='blog-page'>
                <h2>Blog</h2>
                <BlogList
                    posts={this.props.posts}
                />
            </Container>
        )
    }
}

BlogPage.propTypes = {
    posts: PropTypes.array.isRequired,
    fetchPosts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps, { fetchPosts })(BlogPage)

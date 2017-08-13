import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import PostList from '../components/blog/PostList'
import Post from '../components/blog/Post'
import { fetchPosts } from '../actions/Blog'

class BlogPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postId: ''
        }
    }

    componentDidMount() {
        this.props.fetchPosts()
    }

    componentWillReceiveProps(newProps) {
        if (newProps.location.pathname !== '/blog') {
            this.setState({ postId: newProps.location.pathname.split('/blog')[1] })
        } else {
            this.setState({ postId: '' })
        }
    }

    render() {
        return (
            <Container id='blog-page'>
                {this.state.postId === ''
                    ?
                        <div>
                            <h2>Blog</h2>
                            <PostList
                                posts={this.props.posts}
                            />
                        </div>
                    :
                        <Post
                            postId={this.state.postId}
                            posts={this.props.posts}
                        />
                }
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

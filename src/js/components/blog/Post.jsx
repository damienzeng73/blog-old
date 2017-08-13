import React from 'react'
import PropTypes from 'prop-types'
import { Button, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Post = (props) => {
    let post = _.filter(props.posts, (post) => {
        return '/' + post._id === props.postId
    })[0]

    let tagsCollection = _.map(post.tags, (tag, idx) => {
        return (
            <Label key={idx} size='tiny'>{tag}</Label>
        )
    })

    return (
        <div className='post'>
            <h2>{post.title}</h2>

            <div className='meta'>
                {tagsCollection}
            </div>

            <div className='description'>
                <p dangerouslySetInnerHTML={{__html: post.content}}></p>
            </div>

            <Link to='/blog'>
                <Button primary floated='right'>Go back</Button>
            </Link>
        </div>
    )
}

Post.propTypes = {
    postId: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired
}


export default Post

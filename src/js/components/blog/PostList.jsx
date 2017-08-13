import React from 'react'
import PropTypes from 'prop-types'
import { Item, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
    let postsCollection = _.map(props.posts, (post, idx) => {
        let tagsCollection = _.map(post.tags, (tag, idx) => {
            return (
                <Label key={idx} size='tiny'>{tag}</Label>
            )
        })

        return (
            <Item key={idx}>
                <Item.Content>
                    <Item.Header as='a'>
                        {post.title}
                    </Item.Header>

                    <Item.Meta>
                        {tagsCollection}
                    </Item.Meta>

                    <Item.Description dangerouslySetInnerHTML={{__html: post.content}}>
                    </Item.Description>
                    <Item.Extra>
                        <Link to={`/blog/${post._id}`}>Read more</Link>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    })

    return (
        <Item.Group divided>
            {postsCollection}
        </Item.Group>
    )
}

BlogList.propTypes = {
    posts: PropTypes.array.isRequired
}


export default BlogList

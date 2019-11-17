import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPostComments } from '../../../store/comments/actions'
import ListItem from '../../../components/ListItem'
import CommentsListStyles from './CommentsListStyles'

export const CommentsList = ({ fetchPostComments, comments }) => {
  useEffect(() => {
    fetchPostComments()
  }, [])

  return (
    <>
      <h2>Comments</h2>
      <CommentsListStyles>
        {comments.map(comment => <ListItem key={comment.id}>{comment.name}</ListItem>)}
      </CommentsListStyles>
    </>
  )
}

const mapStateToProps = state => ({
  comments: state.comments
})

const mapDispatchToProps = {
  fetchPostComments,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentsList)

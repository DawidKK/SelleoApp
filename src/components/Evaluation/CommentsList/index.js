import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPostComments } from '../../../store/comments/actions'

export const CommentsList = ({ fetchPostComments, comments }) => {
  useEffect(() => {
    fetchPostComments()
  }, [])

  return (
    <>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
      </ul>
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

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchPostComments } from '../../../store/comments/actions'
import ListItem from '../../../components/ListItem'
import CommentsListStyles from './CommentsListStyles'

export const CommentsList = ({ fetchPostComments, comments }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    fetchPostComments()
  }, [])


  return (
    <>
      <p>Click counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click to update state
      </button>
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

import React from 'react'
import ListItemStyles from './ListItemStyles'
import ErrorBoundry from '../ErrorBoundry'

export const ListItem = ({ children }) => {
  return (
    <ErrorBoundry>
      <ListItemStyles>
        {children}
      </ListItemStyles>
    </ErrorBoundry>
  )
}

export default ListItem

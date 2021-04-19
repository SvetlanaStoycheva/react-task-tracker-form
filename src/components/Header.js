import React from 'react'
import { Button } from './Button'
import { useLocation } from 'react-router-dom'

function Header({ title, onAdd, showAdd }) {
  const location = useLocation()
  return (
    <header className='header'>
      <h2>{title}Tasks Tracker</h2>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

export default Header

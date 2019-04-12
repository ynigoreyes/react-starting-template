import React from 'react'
import PropTypes from 'prop-types'

export default function Header({ message }) {
  return <h1>{message}</h1>
}

Header.propTypes = {
  message: PropTypes.string.isRequired,
}

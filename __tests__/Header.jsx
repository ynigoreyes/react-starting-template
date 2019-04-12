import React from 'react'
import { render } from 'react-testing-library'
import Header from 'components/Header'

test('should render and use the `message` prop passed to it', () => {
  const { getByText } = render(<Header message='Hello' />)
  getByText('Hello')
})

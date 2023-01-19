import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
        inventore animi distinctio obcaecati corporis saepe similique ad
        doloribus ut nesciunt!
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  )
}

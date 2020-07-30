import React from 'react'
export default function(props) {
  return (
    <svg {...props} viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="10" />
      <path d="M10 20V0C4.477 0 0 4.477 0 10s4.477 10 10 10z" />
    </svg>
  )
}

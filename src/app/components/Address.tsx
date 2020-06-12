import React from 'react'

interface Props {
  municipality: string
  postalCode: string
  streetAddress: string
}

export function Address({ municipality, postalCode, streetAddress }: Props) {
  return (
    <address>
      <span className="municipality">{municipality}</span>
      <span className="postalCode">{postalCode}</span>
      <span className="streetAddress">{streetAddress}</span>
    </address>
  )
}
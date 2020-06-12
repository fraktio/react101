import React from 'react'

import { Address } from './Address'

interface Props {
  name: Name
  address: AddressObject
  email: string
  phone: string
  dateOfBirth: Date
}

interface Name {
  firstName: string
  lastName: string
} 

interface AddressObject {
  municipality: string
  postalCode: string
  streetAddress: string
}

export function Header({ name, address, email, phone}: Props) {
  return (
    <div>
      <h1>Curriculum Vitae</h1>

      <h2>{name.firstName} {name.lastName}</h2>

      <Address municipality={address.municipality} postalCode={address.postalCode} streetAddress={address.streetAddress} />

      <p>{email}</p>

      <p>{phone}</p>
    </div>
  )
}

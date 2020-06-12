import React from 'react'

interface Props {
  
}

interface EducationItem {
    placeOfStudy: string
    degree: string
    startDate: Date
    endDate: Date
} 

export function Education({ }: Props) {
  return (
    <div>
      <p>education</p>
    </div>
  )
}


education: [
    {
      placeOfStudy: 'Metropolia',
      degree: 'Bachelor of Engineering, IT',
      startDate: new Date('2012-09-01'),
      endDate: new Date('2016-05-31'),
    }
  ],
import React from 'react'

interface Props {
  education: EducationItem[],
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

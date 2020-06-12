import React from 'react'

interface Props {
  workExperience: WorkExperienceItem[],
}

interface WorkExperienceItem {
  company: string
  startDate: Date
  endDate: Date
  title: string
  description: string
}

export function WorkExperience({ workExperience }: Props) {
  return (
    <>
      {workExperience.map(workExperienceItem => (
        <div>
          <h3>{workExperienceItem.company}</h3>
          <time datetime={workExperienceItem.startDate}></time> 
        </div>
      ))}
    </>
  )
}

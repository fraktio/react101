import React from 'react'
import { Header } from './Header'
import { WorkExperience } from './WorkExperience'
import { Education } from './Education'
import { Skills } from './Skills'
import { References } from './References'
import { Hobbies } from './Hobbies'
import { Footer } from './Footer'

const data = {
  name: {
    firstName: 'John',
    lastName: 'Doe'
  },
  dateOfBirth: new Date('1980-03-08'),
  phone: '+358 40 1234567',
  email: 'john.doe@example.com',
  address: {
    municipality: 'Helsinki',
    postalCode: '00100',
    streetAddress: 'Antinkatu 1'
  },
  about: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
  picture: 'https://placekitten.com/200/300',
  workExperience: [
    {
      company: 'foo',
      startDate: '12.04.1998',
      endDate: '18.02.2001',
      jobTitle: 'luss'
    },
    {
      company: 'bar',
      startDate: '12.04.2002',
      endDate: '18.02.2003',
      jobTitle: 'xoo'
    }
  ],
  education: [
    {
      placeOfStudy: 'Metropolia',
      degree: 'Bachelor of Engineering, IT',
      startDate: new Date('2012-09-01'),
      endDate: new Date('2016-05-31'),
    }
  ],
  skills: [
    {
      programming: [
        {
          technology: 'JavaScript',
          level: 5
        },
        {
          technology: 'React',
          level: 4
        },
        {
          technology: 'Java',
          level: 3,
        },
        {
          technology: 'C++',
          level: 1
        }
      ],
    },
    {
      languages: [
        {
          language: 'Finnish',
          level: 5
        },
        {
          language: 'English',
          level: 4
        },
        {
          language: 'Swedish',
          level: 2
        }
      ],
    }
  ],
  references: {
    name: 'Lusso',
    company: 'Grande',
    phone: '+358 50 1234253',
  },
  hobbies: ['Cycling']
}

export function CurriculumVitae() {
  return (
    <div>
      <Header
        name={data.name}
        address={data.address}
        email={data.email}
        phone={data.phone}
        dateOfBirth={data.dateOfBirth}
      />

      <WorkExperience />

      <Education />
      <Skills />
      <References />
      <Hobbies />
      <Footer />
    </div>
  )
}

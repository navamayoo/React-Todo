import React from 'react'
import PageHeader from '../../layout/PageHeader';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


export default function Student() {
  return (
    <>
     <PageHeader
        title="Add New Student"
        //  subTitle="Create a Student Profile"
        icon={<PersonAddAlt1Icon fontSize="large" />}
      />
      
    </>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateUser from './UpdateUser';

export default function UpdateUsers() {
  const { id } = useParams();
  return (
    <div><UpdateUser id={id} /></div>
  )
}

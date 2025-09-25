import React from 'react'
import {currentUser} from '@clerk/nextjs/server'
import Guest from '@/components/Guest'

export default async function Home() {
  const user = await currentUser();
  if(!user){
    return <Guest />
  }
  return (
    <div>home </div>
  )
}

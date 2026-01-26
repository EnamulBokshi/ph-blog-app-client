import { Navbar } from '@/components/layout/Navbar'
import { userServices } from '@/services/user.service'
import React from 'react'

async function CommonLayout({children}: {children: React.ReactNode}) {
  const {data} = await userServices.getSession();
  let isLoggedIn = false;
  if(data) {
    isLoggedIn = true;
  }
  return (
    <div>
        <Navbar isLoggedIn = {isLoggedIn}/>
        {children}
    </div>
  )
}

export default CommonLayout
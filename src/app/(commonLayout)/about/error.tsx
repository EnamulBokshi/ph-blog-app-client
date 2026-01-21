"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'

function ErrorAbout({error, reset}: {error: Error & {digest?: string}, reset: ()=> void}) {
    useEffect(()=> {
        console.error(error);

    },[])
  return (
    <div>
        <h1>something went wrong.. please try again later.</h1>
        <button onClick={()=> reset()}>Retry</button>
        <Link href={'/'} >Go Home</Link>

    </div>
  )
}

export default ErrorAbout
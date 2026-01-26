"use client"

import { getBlogs } from '@/actions/blog.action';
import { Blog } from '@/types';
import React, { useEffect, useState } from 'react'

export default  function About() {

const [data, setData] = useState<Blog[]>();

console.log("data: ",data);

useEffect(()=> {

(async ()=> {
  const res = await getBlogs();
  setData(res)
})()

}, [])

  return (
    <div>About</div>
  )
}


  //? for loading.tsx simulation
// await new Promise((resole) => setTimeout(resole, 4000));
//? for error.tsx simulation
// throw new Error('Something Went wrong!!.');
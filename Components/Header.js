import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
<>
  <div className='h-100 w-100 bg-green-500 items-center flex p-5 '>
    <h2>Logo</h2>
    <div className='flex gap-10 mx-10'>
      <Link href='/About'>About</Link>
      <Link href='/Product'>Product</Link>
      <Link href='/Courses'>Courses</Link>
    </div>
  </div>
    
</>    
  )
}
export default Header

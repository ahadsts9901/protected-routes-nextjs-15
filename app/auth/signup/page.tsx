import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <main>
      <div>Signup</div>
      <Link href="/auth/signin" className='text-blue-600'>go to signin</Link>
    </main>
  )
}

export default Page
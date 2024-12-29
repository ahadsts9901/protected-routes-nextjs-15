import Link from 'next/link'
import React from 'react'

const BackoHome = () => {
    return (
        <div className='mb-4'>
            <Link href="/"
                className='w-fit cursor-pointer text-left py-2 px-4 bg-slate-400'
            >Back To Home</Link>
        </div>
    )
}

export default BackoHome
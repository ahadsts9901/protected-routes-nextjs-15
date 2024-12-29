import Link from 'next/link'
import React from 'react'

const Page = () => {

    const courseIds = ["1", "2", "3", "4"]

    return (
        <main>
            <div>Courses</div>
            {courseIds?.map((id: any, i: number) => (
                <Link key={i} href={`/courses/${id}`}
                    className='px-8 py-4 bg-blue-300 text-blue-800 decoration-blue-800 hover:underline'
                >Course {id}</Link>
            ))}
        </main>
    )
}

export default Page
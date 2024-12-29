import GoBack from '@/app/components/GoBack'
import React from 'react'

const Page = ({ params }: any) => {
    return (
        <main>
            <GoBack />
            <div>Dynamic Course: {params?.courseId}</div>
        </main>
    )
}

export default Page
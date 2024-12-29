import React from 'react'

const Page = ({ params }: any) => {
    return (
        <div>Dynamic Course: {params?.courseId}</div>
    )
}

export default Page
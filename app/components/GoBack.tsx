"use client"
import React, { useEffect, useState } from 'react'

const GoBack = () => {
    const [back, set_back] = useState(false)

    useEffect(() => {
        if (!back) return
        window.history.back()
    }, [back])

    return (
        <button onClick={() => set_back(true)}
            className='cursor-pointer capitalize bg-slate-200 px-4 py-2 w-[100px] text-left mb-4'
        >Go Back</button>
    )
}

export default GoBack
"use client"
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Main = () => {
    const [role, set_role] = useState("")

    useEffect(() => {
        if (!role) return
        localStorage.setItem("role", role)
        switch (role) {
            case "admin":
                redirect("/admin/analytics")
            case "sub-admin":
                redirect("/sub-admin/analytics")
            case "tutor":
                redirect("/tutor/analytics")
            case "student":
                redirect("/student/analytics")
            default:
                redirect("/")
        }
    }, [role])

    const role_options = ["admin", "sub-admin", "tutor", "student"]

    return (
        <div className='flex flex-col justify-start items-start gap-2 w-[200px] mt-4'>
            {role_options?.map((role: any, i: number) => (
                <button key={i} onClick={() => set_role(role)}
                    className='cursor-pointer capitalize bg-slate-200 px-4 py-2 w-full text-left'
                >Signin as: {role}</button>
            ))}
        </div>
    )
}

export default Main
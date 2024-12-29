"use client"
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getDashboardPath } from '../utils/functions'

const Header = () => {
    const current_path = usePathname()
    const [role, set_role] = useState<any>("")
    const [is_logout, set_is_logout] = useState(false)

    const header_options = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Courses", path: "/courses" },
        { label: "FAQ", path: "/frequently-asked-questions" },
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms & Conditions", path: "/terms-and-conditions" },
        ...(
            role ? [
                { label: "Profile", path: "/profile" },
                { label: "Dashboard", path: getDashboardPath(role) },
            ] : []
        ),
    ]

    useEffect(() => {
        const current_role = localStorage.getItem("role")
        set_role(current_role)
    }, [])

    useEffect(() => {
        if (!is_logout) return
        localStorage.removeItem("role")
        redirect("/auth/signin")
    }, [is_logout])

    return (
        <div className='w-full flex gap-8 gap-y-4 flex-wrap py-4 px-8 bg-slate-600 text-white mb-4'>
            {header_options?.map((opt: any, i: number) => (
                <Link href={opt?.path} key={i}
                    className={`hover:underline decoration-white ${opt?.path === current_path ? "underline" : null}`}
                >{opt?.label}</Link>
            ))}
            {role &&
                <button className='cursor-pointer capitalize bg-slate-200 px-4 py-2 w-[100] text-center text-black'
                    onClick={() => set_is_logout(true)}
                >Logout</button>}
        </div>
    )
}

export default Header
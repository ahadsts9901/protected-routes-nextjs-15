"use client"
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { getDashboardPath } from '../utils/functions'
import axios from 'axios'

export const LogoutButton = () => {
    const [is_logout, set_is_logout] = useState(false)

    useEffect(() => {
        if (!is_logout) return
        localStorage.removeItem("role")
        signout()
    }, [is_logout])

    const signout = async () => {
        try {
            const resp = await axios.post(`/api/signout`, {}, {
                withCredentials: true
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <button className='cursor-pointer capitalize bg-slate-200 px-4 py-2 w-[100] text-center text-black'
            onClick={() => set_is_logout(true)}
        >Logout</button>
    )
}

const Header = () => {
    const current_path = usePathname()
    const [role, set_role] = useState<any>("")

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
            ] : [
                { label: "Signin", path: "/auth/signin" },
            ]
        ),
    ]

    useEffect(() => {
        const current_role = localStorage.getItem("role")
        set_role(current_role)
    }, [])

    return (
        <div className='w-full flex gap-8 gap-y-4 flex-wrap py-4 px-8 bg-slate-600 text-white mb-4'>
            {header_options?.map((opt: any, i: number) => (
                <Link href={opt?.path} key={i}
                    className={`hover:underline decoration-white ${opt?.path === current_path ? "underline" : null}`}
                >{opt?.label}</Link>
            ))}
            {role && <LogoutButton />}
        </div>
    )
}

export default Header
"use client"
import React, { useEffect, useState } from 'react'
import { getDashboardRouting } from '../utils/functions'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoutButton } from './Header'

const Dashboard = () => {
    const current_path = usePathname()
    const [dashboardRoutes, set_dashboardRoutes] = useState<any>([])

    useEffect(() => {
        const role = localStorage.getItem("role")
        if (role) set_dashboardRoutes(getDashboardRouting(role))
    }, [])

    return (
        <div className='w-full flex justify-start items-start py-4 px-8 gap-x-8 gap-y-4 flex-wrap bg-red-200 mb-4'>
            {dashboardRoutes?.map((route: any, i: number) => (
                <Link href={route?.path} key={i}
                    className={`text-red-800 hover:underline decoration-red-800 ${route?.path === current_path ? "underline" : null}`}
                >
                    {route?.label}
                </Link>
            ))}
            <LogoutButton />
        </div>
    )
}

export default Dashboard
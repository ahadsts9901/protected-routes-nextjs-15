import { NextRequest, NextResponse } from "next/server";

const adminRoutes = [
    "/admin/analytics",
    "/admin/courses",
    "/admin/sub-admins",
    "/admin/tutors",
    "/admin/students",
]

const subAdminRoutes = [
    "/sub-admin/analytics",
    "/sub-admin/courses",
    "/sub-admin/tutors",
    "/sub-admin/students",
]

const tutorRoutes = [
    "/tutor/analytics",
    "/tutor/courses",
    "/tutor/students",
]

const studentRoutes = [
    "/student/analytics",
    "/student/courses",
]

const publicRoutes = [
    "",
    "",
    "",
    "",
    "",
]

export const middleware = async (req: NextRequest, res: NextResponse) => {
    try {
        // NextResponse.redirect(new URL("/contact"))
        const role = req.cookies.get("role")?.value

    } catch (error) {
        console.error(error)
        NextResponse.json({
            message: "middleware server error"
        }, { status: 500 })
    }
}
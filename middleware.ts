import { NextRequest, NextResponse } from "next/server";

const adminRoutes = [
    "/admin/analytics",
    "/admin/courses",
    "/admin/sub-admins",
    "/admin/tutors",
    "/admin/students",
];

const subAdminRoutes = [
    "/sub-admin/analytics",
    "/sub-admin/courses",
    "/sub-admin/tutors",
    "/sub-admin/students",
];

const tutorRoutes = [
    "/tutor/analytics",
    "/tutor/courses",
    "/tutor/students",
];

const studentRoutes = [
    "/student/analytics",
    "/student/courses",
];

const publicRoutes = [
    "/",
    "/about",
    "/contact",
    "/courses",
    "/frequently-asked-questions",
    "/privacy-policy",
    "/terms-and-conditions",
];

const unAuthRoutes = [
    ...publicRoutes,
    "/auth/signin",
    "/auth/signup",
];

const protectedRoute = [
    "/profile"
];

export const middleware = async (req: NextRequest) => {
    try {
        const { pathname } = req.nextUrl;

        if (pathname.startsWith("/_next")) {
            return NextResponse.next();
        }

        const role = req.cookies.get("role")?.value;

        if (!role && !unAuthRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/auth/signin", req.url));
        }

        return NextResponse.next();

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Middleware server error" },
            { status: 500 }
        );
    }
};

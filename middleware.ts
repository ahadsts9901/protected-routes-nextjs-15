import { NextRequest, NextResponse } from "next/server";

const publicRoutes = [
    "/",
    "/about",
    "/contact",
    "/courses",
    "/frequently-asked-questions",
    "/privacy-policy",
    "/terms-and-conditions",
];

const adminRoutes = [
    ...publicRoutes,
    "/admin/analytics",
    "/admin/courses",
    "/admin/sub-admins",
    "/admin/tutors",
    "/admin/students",
];

const subAdminRoutes = [
    ...publicRoutes,
    "/sub-admin/analytics",
    "/sub-admin/courses",
    "/profile",
    "/sub-admin/tutors",
    "/sub-admin/students",
    "/profile",
];

const tutorRoutes = [
    ...publicRoutes,
    "/tutor/analytics",
    "/tutor/courses",
    "/tutor/students",
    "/profile",
];

const studentRoutes = [
    ...publicRoutes,
    "/student/analytics",
    "/student/courses",
    "/profile",
];

const unAuthRoutes = [
    ...publicRoutes,
    "/auth/signin",
    "/auth/signup",
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

        if (role === "admin" && !adminRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        if (role === "sub-admin" && !subAdminRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        if (role === "tutor" && !tutorRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/", req.url));
        }

        if (role === "student" && !studentRoutes.includes(pathname)) {
            return NextResponse.redirect(new URL("/", req.url));
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

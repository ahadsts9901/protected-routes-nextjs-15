export const getDashboardPath = (role: string) => {
    switch (role) {
        case "admin":
            return "/admin/analytics"
        case "sub-admin":
            return "/sub-admin/analytics"
        case "tutor":
            return "/tutor/analytics"
        case "student":
            return "/student/analytics"
        default:
            return "/"
    }
}

export const getDashboardRouting = (role: string) => {
    const adminRoutes = [
        { label: "Analytics", path: "/admin/analytics" },
        { label: "Courses", path: "/admin/courses" },
        { label: "Sub Admins", path: "/admin/sub-admins" },
        { label: "Tutors", path: "/admin/tutors" },
        { label: "Students", path: "/admin/students" },
    ]
    const subAdminRoutes = [
        { label: "Analytics", path: "/sub-admin/analytics" },
        { label: "Courses", path: "/sub-admin/courses" },
        { label: "Tutors", path: "/sub-admin/tutors" },
        { label: "Students", path: "/sub-admin/students" },
    ]
    const tutorRoutes = [
        { label: "Analytics", path: "/tutor/analytics" },
        { label: "Courses", path: "/tutor/courses" },
        { label: "Students", path: "/tutor/students" },
    ]
    const studentRoutes = [
        { label: "Analytics", path: "/student/analytics" },
        { label: "Courses", path: "/student/courses" },
    ]
    switch (role) {
        case "admin":
            return adminRoutes
        case "sub-admin":
            return subAdminRoutes
        case "tutor":
            return tutorRoutes
        case "student":
            return studentRoutes
        default:
            return []
    }
}
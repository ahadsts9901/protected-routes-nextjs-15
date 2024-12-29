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
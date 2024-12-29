import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const response = NextResponse.json({
            message: "signout successfull"
        })
        response.cookies.set("role", "", {
            httpOnly: true,
            secure: true,
        })
        return response

    } catch (error) {
        console.error(error)
        NextResponse.json({
            message: "server error"
        }, { status: 500 })
    }
}
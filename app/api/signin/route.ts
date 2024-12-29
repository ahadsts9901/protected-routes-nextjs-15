import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
    try {
        const body = await req.json()
        const response = NextResponse.json({
            message: "signin successfull"
        })
        response.cookies.set("role", body?.role, {
            httpOnly: true,
            secure: true,
        })
        console.log(body?.role)
        return response

    } catch (error) {
        console.error(error)
        NextResponse.json({
            message: "server error"
        }, { status: 500 })
    }
}
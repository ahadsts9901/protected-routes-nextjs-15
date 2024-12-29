import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body: any = await req.json();
        const response = NextResponse.json({
            message: "signin successful"
        });

        response.cookies.set("role", body?.role, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        });
        return response;

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "server error"
        }, { status: 500 });
    }
};

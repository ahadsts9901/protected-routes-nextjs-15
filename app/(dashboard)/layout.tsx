import { Fragment } from "react";
import BackoHome from "../components/BackoHome";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <BackoHome />
            {children}
        </Fragment>
    );
}

import { Fragment } from "react";
import BackoHome from "../components/BackoHome";
import Dashboard from "../components/Dashboard";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <BackoHome />
            <Dashboard />
            {children}
        </Fragment>
    );
}

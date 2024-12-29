import { Fragment } from "react";
import Header from "../components/Header";
import BackoHome from "../components/BackoHome";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <Header />
            <BackoHome />
            {children}
        </Fragment>
    );
}

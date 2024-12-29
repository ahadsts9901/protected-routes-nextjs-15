import { Fragment } from "react";
import Header from "../components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
}

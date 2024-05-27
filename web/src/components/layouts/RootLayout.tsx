import TanstackQuery from "@/lib/TanstackQuery";
import { cn } from "@/lib/utils";
import React from "react";
import ThemeHandler from "../ui/ThemeHandler";

import { cookies } from "next/headers";

type RootLayoutProps = {
    children: React.ReactNode;
    className?: string;
};
export default function Layout({ children, ...rest }: RootLayoutProps) {
    const { className } = rest;
    const { get } = cookies();
    const theme = get("theme");
    return (
        <html lang="en" color-scheme={theme?.value || "light"}>
            <body
                {...rest}
                className={cn(
                    `min-h-screen bg-background font-sans antialiased ${theme?.value || ""}`,
                    className
                )}
            >
                <TanstackQuery>
                    {children}
                    <ThemeHandler currentTheme={theme?.value || "light"} />
                </TanstackQuery>
            </body>
        </html>
    );
}

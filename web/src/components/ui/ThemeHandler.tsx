"use client";
import { setCookie } from "cookies-next";
import { useState } from "react";
import Icon from "@/lib/icons/lucide";
export default function ThemeHandler({
    currentTheme,
}: {
    currentTheme: string;
}) {
    const [cTheme, setCTheme] = useState(currentTheme);

    const handleTheme = () => {
        document.documentElement.setAttribute("color-scheme", cTheme === "light" ? "dark" : "light");
        
        if (cTheme === "light") {
            document.body.classList.add("dark");
            setCookie("theme", "dark", {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            setCTheme("dark");
        } else {
            document.body.classList.remove("dark");
            setCookie("theme", "light", {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            setCTheme("light");
        }
    };

    return (
        <button
            className="fixed bottom-4 right-4 bg-primary text-primary-foreground
                 rounded-full p-2
                hover:scale-110 transition-transform ease-out
                
            "
            onClick={handleTheme}
        >
            <Icon
                name={cTheme === "light" ? "Moon" : "Sun"}
                className="w-6 h-6"
            />
        </button>
    );
}

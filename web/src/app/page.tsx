import Link from "next/link";

export default function Home() {
    return (
        <main className="grid place-content-center gap-2 h-screen text-center">
            <h1 className="text-2xl font-bold text-primary">Template</h1>
            <div className="text-md">
                get new theme from{" "}
                <Link
                    href="https://ui.shadcn.com/themes"
                    target="_blank"
                    className="hover:underline text-primary font-medium"
                >
                    Shadcn/theme
                </Link>
                <br />
                or
                <br />
                <Link
                    href="https://zippystarter.com/tools/shadcn-ui-theme-generator"
                    target="_blank"
                    className="hover:underline text-primary font-medium"
                >
                    zippystarter{" "}
                </Link>
                for more customization
            </div>
            <p className=" text-xl max-w-96 text-foreground/50">
                NextJs template with theme <br /> pre-Installed packages
            </p>
        </main>
    );
}

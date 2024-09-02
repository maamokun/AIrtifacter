import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import ClientSessionProvider from "@/app/components/auth";
import AccButton from "./components/ui/AccButton";
import "./globals.css";

const hsr = localFont({ src: "./assets/HSR.woff2" });

export const metadata: Metadata = {
    title: "AIrtifacter",
    description: "Making building characters easier with AI!",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={hsr.className}
            lang={headers().get("x-locale")?.split("-")[0]}
        >
            <body>
                <ClientSessionProvider>
                    {children}
                    <AccButton />
                </ClientSessionProvider>
                <script
                    async
                    src="https://analytics.mikandev.tech/script.js"
                    data-website-id="a0241f9a-0ec0-4971-9dfc-c7c6138ea190"
                ></script>
            </body>
        </html>
    );
}

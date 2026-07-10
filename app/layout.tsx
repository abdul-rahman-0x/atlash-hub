import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";
import { Suspense } from "react";
import HeaderSkeleton from "@/components/common/header-skeleton";

const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Atlash",
        template: "%s | Atlash Hub",
    },
    description:
        "Atlash is the industry-standard intelligence layer for scaling digital infrastructure. By centralizing product lifecycles and simplifying multi-stack verification, Atlash reduces operational overhead by 70% and accelerates time-to-market by 45%.",
    keywords: [
        "Infrastructure Registry",
        "Deployment Control Plane",
        "Reliability Index",
        "Enterprise Digital Assets",
        "Architectural Integrity",
    ],
    icons: {
        icon: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${outfit.className} antialiased relative min-h-screen flex flex-col bg-[#F9F7F0]`}>
                <div
                    className="texture opacity-40 fixed inset-0 pointer-events-none z-99"
                    aria-hidden="true"
                />
                <Suspense fallback={<HeaderSkeleton />}>
                    <Header />
                </Suspense>

                <main className="relative z-10 flex-1">{children}</main>

                <Footer />

                <Toaster
                    position="bottom-right"
                    richColors
                    closeButton
                    expand
                />

                <Analytics />
            </body>
        </html>
    );
}

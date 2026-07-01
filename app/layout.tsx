import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/common/footer";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Atlash | High-Velocity Deployment Hub",
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${outfit.className} antialiased relative min-h-screen`}>
                    {/* THE TEXTURE OVERLAY  */}
                    <div className="texture" aria-hidden="true" />
                    <main className="relative z-10">
                        <Header />
                        {children}
                        <Footer />
                    </main>
                    <Analytics />
                </body>
            </html>
        </ClerkProvider>
    );
}

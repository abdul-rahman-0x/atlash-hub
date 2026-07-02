import type { Metadata } from "next";
import { Suspense } from "react";
import SubmitContent from "./submit-content";

export const metadata: Metadata = {
    title: "Launch Your Project",

    description:
        "Submit your startup, AI tool, side project, SaaS, developer product, or experiment to Atlash. Share what you've built, get discovered by builders, and showcase your work to the community.",

    keywords: [
        "submit startup",
        "launch product",
        "share side project",
        "developer showcase",
        "product launch platform",
        "AI tools directory",
        "startup showcase",
        "indie hackers",
        "maker community",
        "developer products",
        "software showcase",
        "SaaS launch",
        "product discovery",
        "build in public",
        "startup community",
        "launch your startup",
        "share your project",
        "tech products",
        "founder community",
        "Atlash",
    ],

    openGraph: {
        title: "Launch Your Project | Atlash Hub",
        description:
            "Share your startup, side project, AI tool, or developer product with builders worldwide and get discovered.",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Launch Your Project | Atlash Hub",
        description:
            "Submit your product, share your story, and get discovered by the builder community.",
    },
};

export default function SubmitPage() {
    return (
        <section className="py-16 lg:py-24 bg-background">
            <div className="wrapper">
                <div className="max-w-3xl mx-auto">
                    <Suspense fallback={<div>Loading...</div>}>
                        <SubmitContent />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}

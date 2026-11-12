import Link from "next/link";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Button } from "@/components/ui/button";
import HeaderTag from "../common/header-tag";

const heroHeadingFont = Barlow_Semi_Condensed({
    subsets: ["latin"],
    weight: ["700", "800"],
    display: "swap",
});

export default function HeroSection() {
    return (
        <section className="relative min-h-svh overflow-hidden border-b-2 border-[#10201D] bg-[#3D5F58] text-[#F7F7F2]">
            <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-[clamp(60px,6vw,100px)] text-center sm:px-8">
                <div className="flex w-full max-w-5xl flex-col items-center">
                    <HeaderTag
                        firstTitle="Curated by makers"
                        secondTitle="Verified for developers"
                    />

                    <h1
                        className={`${heroHeadingFont.className} mb-6 max-w-5xl text-[clamp(2.75rem,8.5vw,6.5rem)] font-extrabold tracking-[-0.03em] leading-[0.94] text-balance`}>
                        Discover the tools
                        <br />
                        <span className="text-[#8BB2DE]">
                            builders are shipping.
                        </span>
                    </h1>

                    <p className="mb-10 max-w-2xl text-base font-medium leading-relaxed text-[#F7F7F2] sm:text-lg sm:leading-8">
                        A structured directory of modern developer utilities, micro-SaaS, and open-source software. Explore verified tools vetted by real engineers, or launch your own work directly to an active technical audience.
                    </p>

                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <Button asChild size="lg" variant="default">
                            <Link href="/submit">Share your project</Link>
                        </Button>

                        <Button asChild size="lg" variant="outlineLight">
                            <Link href="/explore">Explore tools</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

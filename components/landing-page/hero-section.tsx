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
            {/* Main hero content */}
            <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-[clamp(60px,6vw,100px)] text-center sm:px-8">
                <div className="flex w-full max-w-5xl flex-col items-center">
                    <HeaderTag
                        firstTitle="Built by makers"
                        secondTitle="Discovered by people"
                    />

                    {/* Main heading */}
                    <h1
                        className={`${heroHeadingFont.className} mb-7 max-w-5xl text-[clamp(3rem,10vw,7rem)] font-extrabold tracking-[-0.03em] leading-[0.92] text-balance`}>
                        Discover what
                        <br />
                        <span className="text-[#8BB2DE]">
                            builders are building.
                        </span>
                    </h1>

                    {/* Supporting description */}
                    <p className="mb-9 max-w-2xl text-base font-medium leading-7 text-[#F7F7F2] sm:text-xl sm:leading-8">
                        A place to discover remarkable products, follow what
                        builders are creating, and find ideas worth paying
                        attention to. Share what you’re building and connect
                        with the people behind it.{" "}
                    </p>

                    {/* Call-to-action buttons */}
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        {/* Primary CTA */}
                        <Button asChild size="lg" variant="default">
                            <Link href="/submit">Share your project</Link>
                        </Button>

                        {/* Secondary CTA */}
                        <Button asChild size="lg" variant="outlineLight">
                            <Link href="/explore">Explore projects</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

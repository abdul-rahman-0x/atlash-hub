import { Button } from "@/components/ui/button";
import { MoveRight, Compass } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="
                relative
                bg-[#967AE9]
                min-h-screen
                flex
                items-center
                overflow-hidden
                pt-24
                pb-40
                md:pt-40
                md:pb-52
            ">
            <div className="wrapper relative z-20">
                <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
                    {/* HERO */}
                    <h1 className="text-[clamp(2rem,7vw,5.5rem)] font-black leading-[1.1] tracking-tight text-black mb-10">
                        Share your
                        <span className="relative inline-block bg-[#FFB38A] px-4 py-2 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000] -rotate-2 mx-2 text-white italic">
                            Best Work
                        </span>
                        and see what scales.
                    </h1>

                    <p className="text-xl md:text-2xl text-black/80 max-w-2xl font-medium leading-snug mb-12">
                        Join a community of makers sharing projects and shipping
                        products that matter.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
                        <Button asChild size="lg">
                            <Link
                                href="/submit"
                                className="flex items-center gap-2">
                                share project
                                <MoveRight className="size-6" />
                            </Link>
                        </Button>

                        <Button asChild variant="outline" size="lg">
                            <Link
                                href="/explore"
                                className="flex items-center gap-2">
                                Discover More
                                <Compass className="size-6" />
                            </Link>
                        </Button>
                    </div>

                    {/* PLATFORM STATS */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-6xl">
                        <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_#000]">
                            <div className="text-4xl font-black">247</div>
                            <div className="mt-2 text-black/70 font-medium">
                                Products Shared
                            </div>
                        </div>

                        <div className="bg-[#FFB38A] border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_#000]">
                            <div className="text-4xl font-black">12K</div>
                            <div className="mt-2 text-black/70 font-medium">
                                Community Votes
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_#000]">
                            <div className="text-4xl font-black">348</div>
                            <div className="mt-2 text-black/70 font-medium">
                                Active Makers
                            </div>
                        </div>

                        <div className="bg-[#B8F2E6] border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_#000]">
                            <div className="text-4xl font-black">89</div>
                            <div className="mt-2 text-black/70 font-medium">
                                Launches This Week
                            </div>
                        </div>
                    </div>

                    {/* SCROLL HINT */}
                    <div className="mt-16 flex flex-col items-center">
                        <span className="text-sm uppercase tracking-[0.3em] font-bold text-black/60">
                            Discover Projects
                        </span>

                        <div className="mt-3 animate-bounce text-2xl">↓</div>
                    </div>
                </div>
            </div>

            {/* WAVE */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="block w-full h-[120px]">
                    <path
                        fill="#F9F7F0"
                        d="
                        M0,60
                        C240,0 360,120 720,60
                        C1080,0 1200,120 1440,60
                        L1440,120
                        L0,120
                        Z
                        "
                    />
                </svg>
            </div>
        </section>
    );
}

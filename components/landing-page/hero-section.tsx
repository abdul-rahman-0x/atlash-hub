import { Button } from "@/components/ui/button";
import { MoveRight, Compass } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-40 md:pt-32 md:pb-52 bg-[#1E1B4B]">
      {/* Deep Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          background: `
              radial-gradient(circle at 50% -20%, oklch(0.75 0.15 295 / 0.4) 0%, transparent 80%),
              radial-gradient(circle at 50% 100%, oklch(0.12 0 0 / 0.5) 0%, transparent 100%),
              var(--primary)
            `,
        }}
      />

      {/* Texture & Grid Layers */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] z-0"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="wrapper relative z-20">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          {/* Top Badge */}
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-1.5 shadow-nb-md">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-foreground">
              Trusted by builders shipping real products
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.95] tracking-tight text-white mb-8 [text-shadow:0_8px_30px_rgb(0_0_0/0.4),0_4px_8px_rgb(0_0_0/0.3)]">
            Share projects
            <br />
            that deserve attention.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium leading-relaxed mb-12 [text-shadow:0_2px_10px_rgb(0_0_0/0.3)]">
            Discover remarkable products, share what you&apos;re building, and
            connect with developers, founders, and makers who care about
            creating software that people genuinely use.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-xl border-2 border-foreground bg-background px-8 text-foreground font-bold shadow-nb-md hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <Link href="/submit" className="flex items-center gap-3">
                Share Project
                <MoveRight className="size-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 rounded-xl border-2 border-white/40 bg-white/5 px-8 text-white backdrop-blur-md hover:bg-white hover:text-primary transition-all">
              <Link href="/explore" className="flex items-center gap-3">
                Explore Projects
                <Compass className="size-5" />
              </Link>
            </Button>
          </div>

          {/* Platform Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            <StatCard
              value="500+"
              label="Products Launched"
              bgColor="bg-white"
            />
            <StatCard
              value="12K+"
              label="Community Upvotes"
              bgColor="bg-[var(--color-brand-peach)]"
            />
            <StatCard
              value="2K+"
              label="Active Builders"
              bgColor="bg-[var(--color-brand-green)]"
            />
            <StatCard
              value="24/7"
              label="Projects Discoverable"
              bgColor="bg-white"
            />
          </div>

          {/* Scroll */}
          <div className="mt-20 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity cursor-default">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white">
              Discover projects
            </span>
            <div className="mt-4 animate-bounce text-3xl text-white">↓</div>
          </div>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] lg:h-[100px]">
          <path
            fill="var(--background)"
            d="M0,64 C180,18 340,118 720,64 C1100,10 1260,118 1440,64 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  bgColor,
}: {
  value: string;
  label: string;
  bgColor: string;
}) {
  return (
    <div
      className={`
          ${bgColor} 
          border-2 border-foreground rounded-2xl p-7 
          shadow-nb-md hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] 
          transition-all duration-200 text-left
        `}>
      <div className="text-4xl font-black text-foreground tracking-tighter">
        {value}
      </div>
      <div className="mt-1 text-xs font-bold text-foreground/60 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

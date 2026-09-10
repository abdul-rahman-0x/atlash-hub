import { Skeleton } from "@/components/ui/skeleton";

export default function AdminLoading() {
    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#0F201D] pt-12 pb-24 font-sans animate-pulse">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                {/* 1. Back Navigation */}
                <div>
                    <Skeleton className="h-6 w-28 rounded-xl bg-foreground/10" />
                </div>

                {/* 2. Header Block */}
                <header className="space-y-4 text-left border-b border-[#0F201D]/10 pb-8">
                    <div>
                        <Skeleton className="h-5 w-48 rounded-[6px] bg-foreground/10" />
                    </div>

                    <Skeleton className="h-10 sm:h-12 w-3/4 max-w-md rounded-none bg-foreground/30" />

                    <div className="space-y-2 max-w-2xl">
                        <Skeleton className="h-4 w-full rounded-none bg-foreground/10" />
                        <Skeleton className="h-4 w-4/5 rounded-none bg-foreground/10" />
                    </div>
                </header>

                {/* 3. Platform Overview */}
                <section className="space-y-3 text-left">
                    <Skeleton className="h-3 w-32 rounded-none bg-foreground/20" />

                    {/* 4 Cards Grid  */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                        {[...Array(4)].map((_, i) => (
                            <div
                                key={i}
                                className="rounded-none border-2 border-foreground/10 bg-white p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.04)] text-left">
                                {/* Header: Stat Label (Left) + Mono Status Badge (Right) */}
                                <div className="flex items-center justify-between gap-2">
                                    <Skeleton className="h-2.5 w-20 bg-foreground/15 rounded-none" />
                                    <Skeleton className="h-3.5 w-12 bg-foreground/10 rounded-none border border-foreground/5" />
                                </div>

                                {/* Numerical Metric */}
                                <Skeleton className="mt-3 h-8 sm:h-9 w-14 bg-foreground/25 rounded-none" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Submissions Queue Section */}
                <section className="space-y-6 text-left">
                    {/* Header with Switcher Tabs */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0F201D]/10 pb-4">
                        <div className="space-y-1.5">
                            <Skeleton className="h-3 w-36 rounded-none bg-foreground/20" />
                            <Skeleton className="h-3 w-56 rounded-none bg-foreground/10" />
                        </div>

                        {/* Button Toggle Skeletons: Pending & History */}
                        <div className="flex items-center gap-2">
                            <Skeleton className="h-8 w-24 rounded-none bg-foreground/20 border border-foreground/10" />
                            <Skeleton className="h-8 w-24 rounded-none bg-foreground/10 border border-foreground/10" />
                        </div>
                    </div>

                    {/* Submissions Card List */}
                    <div className="space-y-4">
                        {[...Array(2)].map((_, i) => (
                            <article
                                key={i}
                                className="rounded-none border-2 border-foreground/10 bg-white p-4 sm:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.04)]">
                                {/* Row 1: Title, Status Badge (Left) & Visit Site Link (Right) */}
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-2.5">
                                        <Skeleton className="h-6 w-36 sm:w-44 bg-foreground/25 rounded-none" />
                                        <Skeleton className="h-4.5 w-16 bg-foreground/15 rounded-none border border-foreground/5" />
                                    </div>

                                    <Skeleton className="h-4 w-16 bg-foreground/10 rounded-none" />
                                </div>

                                {/* Row 2: Tagline / Story Summary */}
                                <div className="mt-2.5">
                                    <Skeleton className="h-3.5 w-2/3 bg-foreground/10 rounded-none" />
                                </div>

                                {/* Row 3: Metadata & Tags Row (Border Divider) */}
                                <div className="mt-3 flex flex-wrap items-center justify-between gap-y-2 border-t border-foreground/10 pt-3">
                                    {/* Author & Date metadata */}
                                    <div className="flex items-center gap-4">
                                        <Skeleton className="h-3.5 w-24 bg-foreground/15 rounded-none" />
                                        <Skeleton className="h-3.5 w-20 bg-foreground/10 rounded-none" />
                                    </div>

                                    {/* Tags Badges */}
                                    <div className="flex gap-1.5">
                                        <Skeleton className="h-4 w-16 bg-foreground/10 rounded-none" />
                                        <Skeleton className="h-4 w-20 bg-foreground/10 rounded-none" />
                                        <Skeleton className="h-4 w-16 bg-foreground/10 rounded-none" />
                                    </div>
                                </div>

                                {/* Row 4: Action Bar Footer (Approve / Reject on Left, Delete on Right) */}
                                <div className="mt-4 flex flex-col gap-3 border-t-2 border-foreground/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
                                    {/* Approve & Reject Actions */}
                                    <div className="flex items-center gap-2">
                                        <Skeleton className="h-8 w-24 rounded-none bg-foreground/15 border border-foreground/10" />
                                        <Skeleton className="h-8 w-20 rounded-none bg-foreground/15 border border-foreground/10" />
                                    </div>

                                    {/* Delete Button Action */}
                                    <Skeleton className="h-8 w-20 rounded-none bg-foreground/15 border border-foreground/10" />
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}

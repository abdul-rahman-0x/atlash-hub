import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailSkeleton() {
    return (
        <main className="py-12 lg:py-20 bg-background">
            <div className="wrapper px-4 pt-10 pb-20">
                {/* BACK BUTTON */}
                <div className="mb-12">
                    <Skeleton className="h-10 w-40 rounded-xl bg-foreground/5 border border-foreground/10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* LEFT CONTENT */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* HERO */}
                        <div className="space-y-6">
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <Skeleton className="size-20 rounded-3xl bg-foreground/10 border border-foreground/5 shrink-0" />

                                {/* Title + Tagline */}
                                <div className="flex-1 space-y-4 pt-2">
                                    <Skeleton className="h-14 w-3/4 rounded-2xl bg-foreground/25" />

                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full rounded-full bg-foreground/10" />
                                        <Skeleton className="h-4 w-[70%] rounded-full bg-foreground/10" />
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-3">
                                <Skeleton className="h-8 w-20 rounded-full bg-foreground/5 border border-foreground/10" />
                                <Skeleton className="h-8 w-24 rounded-full bg-foreground/5 border border-foreground/10" />
                                <Skeleton className="h-8 w-16 rounded-full bg-foreground/5 border border-foreground/10" />
                                <Skeleton className="h-8 w-28 rounded-full bg-foreground/5 border border-foreground/10" />
                            </div>
                        </div>

                        {/* ABOUT CARD */}
                        <div className="bg-white border-2 border-black rounded-4xl p-8 md:p-10 shadow-[6px_6px_0px_0px_#000]">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <Skeleton className="h-3 w-24 rounded-full bg-foreground/15" />
                                <Skeleton className="flex-1 h-px bg-foreground/10" />
                            </div>

                            {/* Description */}
                            <div className="space-y-4">
                                <Skeleton className="h-5 w-full rounded-lg bg-foreground/10" />
                                <Skeleton className="h-5 w-full rounded-lg bg-foreground/10" />
                                <Skeleton className="h-5 w-[85%] rounded-lg bg-foreground/10" />
                                <Skeleton className="h-5 w-[70%] rounded-lg bg-foreground/10" />
                            </div>

                            {/* Metadata */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-foreground/5">
                                <div className="flex items-center gap-4">
                                    <Skeleton className="size-12 rounded-xl bg-foreground/5 border border-foreground/10" />

                                    <div className="space-y-2">
                                        <Skeleton className="h-2 w-16 rounded-full bg-foreground/10" />
                                        <Skeleton className="h-4 w-28 rounded-full bg-foreground/20" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Skeleton className="size-12 rounded-xl bg-foreground/5 border border-foreground/10" />

                                    <div className="space-y-2">
                                        <Skeleton className="h-2 w-20 rounded-full bg-foreground/10" />
                                        <Skeleton className="h-4 w-36 rounded-full bg-foreground/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Vote Card */}
                        <div className="bg-secondary/5 border border-foreground/5 rounded-4xl p-8 flex flex-col items-center text-center">
                            <Skeleton className="h-4 w-40 rounded-full bg-foreground/15 mb-8" />

                            {/* Vote Counter */}
                            <div className="flex flex-col items-center gap-3">
                                <Skeleton className="h-20 w-20 rounded-3xl bg-foreground/10 border border-foreground/5" />
                                <Skeleton className="h-4 w-12 rounded-full bg-foreground/15" />
                            </div>

                            <Skeleton className="h-3 w-48 rounded-full bg-foreground/10 mt-8" />
                        </div>

                        {/* Visit Button */}
                        <Skeleton className="h-14 w-full rounded-2xl bg-foreground/5 border border-foreground/10" />
                    </div>
                </div>
            </div>
        </main>
    );
}

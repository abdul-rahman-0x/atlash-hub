import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailSkeleton() {
    return (
        <main className="py-12 lg:py-24 bg-background">
            <div className="wrapper">
                {/* 1. BACK BUTTON PILL */}
                <div className="flex items-center gap-2 mb-16">
                    <Skeleton className="h-5 w-40 rounded-full bg-foreground/10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* LEFT SECTION */}
                    <div className="lg:col-span-8 space-y-16">
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                {/* Large Icon Box */}
                                <Skeleton className="size-20 rounded-2xl bg-primary/10 border-2 border-primary/5 shrink-0" />
                                <div className="space-y-4 flex-1 pt-2">
                                    {/* Big Title Pill */}
                                    <Skeleton className="h-12 w-3/4 rounded-2xl bg-foreground/30" />
                                    {/* Subtitle lines */}
                                    <div className="space-y-2">
                                        <Skeleton className="h-3 w-full rounded-full bg-foreground/10" />
                                        <Skeleton className="h-3 w-[80%] rounded-full bg-foreground/10" />
                                    </div>
                                </div>
                            </div>
                            {/* Tag Pills */}
                            <div className="flex gap-2">
                                <Skeleton className="h-8 w-16 rounded-full bg-foreground/10" />
                                <Skeleton className="h-8 w-24 rounded-full bg-foreground/10" />
                                <Skeleton className="h-8 w-20 rounded-full bg-foreground/10" />
                            </div>
                        </div>

                        {/* About Box */}
                        <div className="space-y-6">
                            <Skeleton className="h-4 w-24 rounded-full bg-foreground/20" />
                            <div className="space-y-3">
                                <Skeleton className="h-3.5 w-full rounded-full bg-foreground/10" />
                                <Skeleton className="h-3.5 w-full rounded-full bg-foreground/10" />
                                <Skeleton className="h-3.5 w-2/3 rounded-full bg-foreground/10" />
                            </div>
                        </div>

                        {/* Details Container */}
                        <div className="bg-secondary/5 border-2 border-foreground/5 rounded-[2.5rem] p-10">
                            <Skeleton className="h-6 w-40 rounded-full bg-foreground/20 mb-10" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex items-center gap-4">
                                    <Skeleton className="size-12 rounded-xl bg-foreground/5 border border-foreground/10" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-2 w-16 rounded-full bg-foreground/10" />
                                        <Skeleton className="h-4 w-24 rounded-full bg-foreground/20" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Skeleton className="size-12 rounded-xl bg-foreground/5 border border-foreground/10" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-2 w-16 rounded-full bg-foreground/10" />
                                        <Skeleton className="h-4 w-32 rounded-full bg-foreground/20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-background border-2 border-foreground/10 rounded-[2.5rem] p-10 flex flex-col items-center space-y-8">
                            <Skeleton className="h-4 w-40 rounded-full bg-foreground/20" />
                            {/* Vote Pill Shape */}
                            <Skeleton className="h-16 w-12 rounded-2xl bg-foreground/10" />
                            <Skeleton className="h-10 w-full rounded-full bg-primary/10" />
                        </div>
                        {/* Visit Button */}
                        <Skeleton className="h-16 w-full rounded-full bg-foreground/5 border-2 border-foreground/10" />
                    </div>
                </div>
            </div>
        </main>
    );
}
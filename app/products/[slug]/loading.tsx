import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <main className="min-h-screen bg-[#FAF9F6] pt-16 pb-24 animate-pulse">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Navigation Skeleton */}
                <div className="mb-10">
                    <Skeleton className="h-6 w-32 bg-[#0F201D]/10 rounded-md" />
                </div>

                {/* Left/Right Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* LEFT COLUMN: Core Content & Information Stack (Spans 8 cols) */}
                    <div className="lg:col-span-8 space-y-8 text-left">
                        {/* Title Block Skeleton */}
                        <div className="space-y-4">
                            <div>
                                <Skeleton className="h-5 w-24 bg-[#0F201D]/10 rounded-[6px]" />
                            </div>

                            <Skeleton className="h-10 sm:h-12 w-2/3 bg-[#0F201D]/15 rounded-xl" />

                            <div className="space-y-2 max-w-2xl">
                                <Skeleton className="h-4 w-full bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-4 w-5/6 bg-[#0F201D]/10 rounded-md" />
                            </div>
                        </div>

                        {/* Directory Metadata Section Skeleton (Horizontal quick-facts bar) */}
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-5 border-y border-[#0F201D]/10 text-left">
                            <div className="space-y-1.5">
                                <Skeleton className="h-3 w-12 bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-4 w-28 bg-[#0F201D]/15 rounded-md" />
                            </div>

                            <div className="hidden sm:block w-[1px] h-6 bg-[#0F201D]/10" />

                            <div className="space-y-1.5">
                                <Skeleton className="h-3 w-20 bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-4 w-24 bg-[#0F201D]/15 rounded-md" />
                            </div>

                            <div className="hidden sm:block w-[1px] h-6 bg-[#0F201D]/10" />

                            <div className="space-y-1.5">
                                <Skeleton className="h-3 w-12 bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-4 w-16 bg-[#0F201D]/15 rounded-md" />
                            </div>
                        </div>

                        {/* Flat Project Description Skeleton */}
                        <div className="space-y-3">
                            <Skeleton className="h-3.5 w-28 bg-[#0F201D]/10 rounded-md" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-4 w-full bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-4 w-4/5 bg-[#0F201D]/10 rounded-md" />
                            </div>
                        </div>

                        {/* Tags Section Skeleton */}
                        <div className="pt-6 border-t border-[#0F201D]/10 space-y-3">
                            <Skeleton className="h-3 w-24 bg-[#0F201D]/10 rounded-md" />
                            <div className="flex flex-wrap gap-1.5">
                                <Skeleton className="h-6 w-16 bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-6 w-20 bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-6 w-14 bg-[#0F201D]/10 rounded-md" />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Action Center Sidebar (Spans 4 cols) */}
                    <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-8 lg:pl-10 lg:border-l border-[#0F201D]/10">
                        {/* Action 1: Website Link Skeleton */}
                        <div className="space-y-3 text-left">
                            <Skeleton className="h-3.5 w-28 bg-[#0F201D]/10 rounded-md" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-3 w-full bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-3 w-5/6 bg-[#0F201D]/10 rounded-md" />
                            </div>
                            <Skeleton className="h-12 w-full bg-[#0F201D]/15 rounded-xl" />
                        </div>

                        {/* Action 2: Voting Skeleton */}
                        <div className="space-y-3 pt-6 border-t border-[#0F201D]/10 text-left">
                            <Skeleton className="h-3.5 w-32 bg-[#0F201D]/10 rounded-md" />
                            <div className="space-y-1.5">
                                <Skeleton className="h-3 w-full bg-[#0F201D]/10 rounded-md" />
                                <Skeleton className="h-3 w-4/5 bg-[#0F201D]/10 rounded-md" />
                            </div>
                            <Skeleton className="h-12 w-full bg-[#0F201D]/15 rounded-xl" />
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}

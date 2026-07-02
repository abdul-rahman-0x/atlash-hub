import { Skeleton } from "@/components/ui/skeleton";

interface ProductSkeletonProps {
    itemCount?: number;
    titleWidth?: string;
    sectionClassName?: string;
}

export default function ProductSkeleton({
    itemCount = 6,
    titleWidth = "w-72",
    sectionClassName = "py-24 bg-background",
}: ProductSkeletonProps) {
    return (
        <section className={sectionClassName}>
            <div className="wrapper">
                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                    <div className="space-y-4">
                        {/* Title */}
                        <Skeleton
                            className={`h-11 ${titleWidth} rounded-xl bg-foreground/25`}
                        />

                        {/* Description */}
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[320px] rounded-md bg-foreground/10" />
                        </div>
                    </div>

                    {/* CTA */}
                    <Skeleton className="hidden md:block h-12 w-36 rounded-2xl bg-foreground/5 border border-foreground/10" />
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Array.from({ length: itemCount }).map((_, index) => (
                        <div
                            key={index}
                            className="
                                relative
                                bg-secondary/5
                                border
                                border-foreground/5
                                rounded-4xl
                                p-7
                                min-h-[340px]
                                flex
                                flex-col
                                justify-between
                            ">
                            {/* Top */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-4 flex-1">
                                    {/* Title */}
                                    <Skeleton className="h-8 w-3/4 rounded-lg bg-foreground/25" />

                                    {/* Description */}
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full rounded-md bg-foreground/10" />
                                        <Skeleton className="h-4 w-[85%] rounded-md bg-foreground/10" />
                                        <Skeleton className="h-4 w-[65%] rounded-md bg-foreground/10" />
                                    </div>
                                </div>

                                {/* Vote Box */}
                                <div className="flex flex-col items-center gap-2 shrink-0">
                                    <Skeleton className="h-14 w-14 rounded-2xl bg-foreground/10 border border-foreground/5" />
                                    <Skeleton className="h-3 w-8 rounded-full bg-foreground/15" />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-8">
                                <Skeleton className="h-8 w-20 rounded-full bg-foreground/5 border border-foreground/10" />
                                <Skeleton className="h-8 w-24 rounded-full bg-foreground/5 border border-foreground/10" />
                                <Skeleton className="h-8 w-16 rounded-full bg-foreground/5 border border-foreground/10" />
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-8 mt-8 border-t border-foreground/5">
                                <div className="flex items-center gap-3">
                                    <Skeleton className="size-10 rounded-xl bg-foreground/10" />

                                    <div className="space-y-2">
                                        <Skeleton className="h-3 w-20 rounded-full bg-foreground/10" />
                                        <Skeleton className="h-3 w-28 rounded-full bg-foreground/10" />
                                    </div>
                                </div>

                                <Skeleton className="h-10 w-24 rounded-xl bg-foreground/5 border border-foreground/10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

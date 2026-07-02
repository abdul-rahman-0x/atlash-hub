import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    description?: string;
    href?: string;
    hideButton?: boolean;
}

export default function SectionHeader({
    title,
    description,
    href = "/explore",
    hideButton = false,
}: SectionHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8">
            <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-none">
                    {title}
                </h2>

                {description && (
                    <p className="text-muted-foreground font-medium max-w-xl leading-relaxed text-sm">
                        {description}
                    </p>
                )}
            </div>
            {!hideButton && (
                <div className="shrink-0">
                    <Button asChild variant="default">
                        <Link href={href} className="group">
                            View All
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
}

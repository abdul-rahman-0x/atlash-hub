import { Button } from "../ui/button";
import Link from "next/link";

interface SectionHeaderProps {
    title: React.ReactNode;
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8">
            <div className="space-y-3">
                <h2 className="font-serif font-extrabold text-[clamp(2rem,3.5vw,2.8rem)] tracking-[-0.04em] leading-[0.94] text-balance text-foreground">
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
                            View all
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
}

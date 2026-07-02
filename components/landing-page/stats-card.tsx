import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
    icon: LucideIcon; // Type-safe Lucide icon
    value: string;
    label: string;
    hasBorder?: boolean;
}

export default function StatsCard({
    icon: Icon,
    value,
    label,
    hasBorder,
}: StatsCardProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center p-4 transition-all group",
                hasBorder && "sm:border-x-2 border-black/10",
            )}>
            <div className="flex items-center justify-center gap-3 mb-2">
                {/* Fixed: Icon is now used correctly */}
                <Icon className="size-6 text-black/40 group-hover:text-primary transition-colors" />
                <p className="text-5xl font-black tracking-tighter text-black leading-none">
                    {value}
                </p>
            </div>
            <p className="text-[10px] tracking-[0.2em] font-black text-black/40 uppercase">
                {label}
            </p>
        </div>
    );
}

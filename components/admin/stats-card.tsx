import { Database, Clock3, ShieldCheck, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";

export default function AdminStatsCard({
    all,
    approved,
    pending,
    rejected,
}: {
    all: number;
    approved: number;
    pending: number;
    rejected: number;
}) {
    const stats = [
        {
            label: "Total Products",
            value: all,
            icon: Database,
            color: "bg-[#F9F7F0]",
        },
        {
            label: "Pending Review",
            value: pending,
            icon: Clock3,
            color: "bg-[#FFF5E9]",
        },
        {
            label: "Approved",
            value: approved,
            icon: ShieldCheck,
            color: "bg-[#EEFBE8]",
        },
        {
            label: "Rejected",
            value: rejected,
            icon: XCircle,
            color: "bg-[#FFF0F0]",
        },
    ];

    return (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ label, value, icon: Icon, color }) => (
                <div
                    key={label}
                    className={cn(
                        "rounded-[28px] border-2 border-black p-6",
                        color,
                    )}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/45">
                                {label}
                            </p>

                            <h3 className="mt-3 text-5xl font-black leading-none">
                                {value}
                            </h3>
                        </div>

                        <div className="flex size-12 items-center justify-center rounded-2xl border-2 border-black bg-white">
                            <Icon className="size-5" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

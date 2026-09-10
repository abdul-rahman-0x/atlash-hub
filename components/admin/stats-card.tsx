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
            label: "Total Pipeline",
            value: all,
            statusBadge: "DATABASE",
            bg: "bg-white",
            badgeStyle: "bg-[#FAF9F6] text-[#0F201D]",
        },
        {
            label: "Pending Review",
            value: pending,
            statusBadge: "QUEUE",
            bg: "bg-[#FFF8EE] dark:bg-[#1C1813]",
            badgeStyle: "bg-[#FFE08A] text-[#0F201D]",
        },
        {
            label: "Approved Launches",
            value: approved,
            statusBadge: "LIVE",
            bg: "bg-[#F2FBF0] dark:bg-[#121A11]",
            badgeStyle: "bg-[#D2ECDB] text-[#0F201D]",
        },
        {
            label: "Rejected Submissions",
            value: rejected,
            statusBadge: "CLOSED",
            bg: "bg-[#FFF3F3] dark:bg-[#1C1212]",
            badgeStyle: "bg-[#FAC9C2] text-[#0F201D]",
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map(({ label, value, statusBadge, bg, badgeStyle }) => (
                <div
                    key={label}
                    className={cn(
                        "rounded-none border-2 border-[#0F201D] p-4 shadow-[3px_3px_0px_0px_#0F201D] text-left transition-all",
                        bg,
                    )}>
                    {/* Header: Stat Label + Mono Status Badge */}
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0F201D]/60">
                            {label}
                        </p>

                        <span
                            className={cn(
                                "rounded-none border border-[#0F201D] px-1.5 py-0.5 text-[9px] font-mono font-black uppercase tracking-wider shadow-[1px_1px_0px_0px_#0F201D]",
                                badgeStyle,
                            )}>
                            {statusBadge}
                        </span>
                    </div>

                    {/* Numerical Metric */}
                    <p className="mt-3 font-mono text-3xl sm:text-4xl font-black tracking-tight text-[#0F201D] leading-none">
                        {value}
                    </p>
                </div>
            ))}
        </div>
    );
}

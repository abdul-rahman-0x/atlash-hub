"use client";

import React, { useOptimistic, useTransition, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { upvoteProductAction } from "@/lib/products/product-actions";
import { cn } from "@/lib/utils";
import { Loader2, ArrowBigUpDash } from "lucide-react";

interface VotingButtonsProps {
    hasVoted: boolean;
    voteCount: number;
    productId: number;
    isAuthenticated?: boolean;
}

export default function VotingButtons({
    hasVoted: initialHasVoted,
    voteCount: initialVoteCount,
    productId,
    isAuthenticated = false,
}: VotingButtonsProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [localHasVoted, setLocalHasVoted] = useState(initialHasVoted);

    const [optimisticVoteCount, addOptimisticVote] = useOptimistic(
        initialVoteCount,
        (state, increment: number) => Math.min(999, state + increment),
    );

    const handleVote = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!isAuthenticated) {
            toast.error("Sign in required", {
                description: "You must be signed in to upvote tools.",
                action: {
                    label: "Sign In",
                    onClick: () =>
                        router.push(
                            `/sign-in?callbackUrl=${encodeURIComponent(pathname)}`,
                        ),
                },
            });
            return;
        }

        if (localHasVoted || isPending || optimisticVoteCount >= 999) return;

        setLocalHasVoted(true);

        startTransition(async () => {
            addOptimisticVote(1);
            try {
                const result = await upvoteProductAction(productId);
                if (result && "success" in result && !result.success) {
                    throw new Error(result.message || "Failed to record vote");
                }
            } catch {
                setLocalHasVoted(false);
                toast.error("Vote failed", {
                    description: "Could not record your vote. Please try again.",
                });
            }
        });
    };

    return (
        <button
            type="button"
            onClick={handleVote}
            disabled={localHasVoted || isPending || optimisticVoteCount >= 999}
            title={
                !isAuthenticated
                    ? "Sign in to upvote"
                    : localHasVoted
                        ? "You already upvoted this tool"
                        : "Upvote this tool"
            }
            className={cn(
                "flex items-center gap-1.5 border-2 px-3 py-1.5 rounded-md font-mono text-xs font-black uppercase transition-all select-none h-9 shrink-0",
                localHasVoted
                    ? "bg-[#E97B77] text-[#0F201D] border-foreground shadow-none translate-x-0.5 translate-y-0.5"
                    : "bg-white text-[#0F201D] border-foreground shadow-[2px_2px_0px_0px_#000] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer",
            )}>
            {isPending ? (
                <Loader2 className="size-4 animate-spin shrink-0" />
            ) : localHasVoted ? (
                <ArrowBigUpDash className="size-4 shrink-0 stroke-[2.5px] fill-current" />
            ) : (
                <ArrowBigUpDash className="size-4 shrink-0 stroke-[2.5px] transition-transform group-hover:-translate-y-0.5" />
            )}
            <span className="tabular-nums leading-none">
                {optimisticVoteCount}
            </span>
        </button>
    );
}

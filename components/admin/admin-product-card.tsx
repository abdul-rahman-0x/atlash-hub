"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ExternalLink, Trash2, User } from "lucide-react";

import { ProductType } from "@/types";
import { deleteProductAction } from "@/lib/admin/admin-actions";
import { cn } from "@/lib/utils";

import AdminActions from "./admin-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminProductCard({
    product,
}: {
    product: ProductType;
}) {
    const [isDeleting, setIsDeleting] = useState(false);

    async function handleDelete() {
        const confirmed = confirm(
            `Delete "${product.name}" permanently? This action cannot be undone.`,
        );

        if (!confirmed) return;

        setIsDeleting(true);
        await deleteProductAction(product.id);
        setIsDeleting(false);
    }

    const submittedDate = product.createAt
        ? new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
          }).format(new Date(product.createAt))
        : "Unknown";

    return (
        <article className="rounded-none border-2 border-foreground bg-white dark:bg-[#16151A] p-4 sm:p-5 shadow-foreground shadow-[3px_3px_0px_0px_#000] transition-all ">
            {/* Top Row: Title, Status Badge, and Visit Link */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-mono text-lg font-bold tracking-tight text-foreground sm:text-xl">
                        {product.name}
                    </h3>

                    <Badge
                        className={cn(
                            "rounded-none border border-black px-2 py-0.5 text-[10px] font-black uppercase tracking-wider shadow-[1px_1px_0px_0px_#000]",
                            product.status === "pending" &&
                                "bg-[#FFE08A] text-black",
                            product.status === "approved" &&
                                "bg-[#B8F5A2] text-black",
                            product.status === "rejected" &&
                                "bg-[#FF9A9A] text-black",
                        )}>
                        {product.status}
                    </Badge>
                </div>

                {product.websiteUrl && (
                    <Link
                        href={product.websiteUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-foreground hover:underline">
                        <ExternalLink className="size-3.5" />
                        <span>Visit site</span>
                    </Link>
                )}
            </div>

            {/* Product Tagline / Story Summary */}
            <p className="mt-2 text-xs font-medium leading-relaxed text-muted-foreground sm:text-sm line-clamp-2">
                {product.tagline}
            </p>

            {/* Metadata and Tags Row */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-y-2 border-t border-foreground/10 pt-3 text-xs text-muted-foreground">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <div className="flex items-center gap-1.5">
                        <User className="size-3.5 text-foreground/50" />
                        <span className="font-semibold text-foreground">
                            {product.submittedBy || "Anonymous"}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-foreground/50" />
                        <span>{submittedDate}</span>
                    </div>
                </div>

                {product.tags && product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {product.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-none border border-foreground/20 bg-background px-1.5 py-0.5 text-[10px] font-mono font-medium text-foreground">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Action Bar Footer */}
            <div className="mt-4 flex flex-col gap-3 border-t-2 border-foreground/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <AdminActions
                    productId={product.id}
                    status={product.status ?? ""}
                />

                <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="h-8 rounded-none border border-foreground bg-[#FF9A9A] text-black font-bold text-xs shadow-[2px_2px_0px_0px_#000] hover:bg-[#FF8080] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    <Trash2 className="mr-1.5 size-3.5" />
                    {isDeleting ? "Deleting..." : "Delete"}
                </Button>
            </div>
        </article>
    );
}

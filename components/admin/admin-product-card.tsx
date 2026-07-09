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
            "Delete this product permanently? This action cannot be undone.",
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
        <article className="rounded-[30px] border-2 border-black bg-white p-6 shadow-[5px_5px_0px_0px_#000] transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#000] md:p-8">
            {/* Header */}
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black leading-tight">
                            {product.name}
                        </h3>

                        <Badge
                            className={cn(
                                "border-2 border-black px-3 py-1 text-[11px] font-black uppercase shadow-[2px_2px_0px_0px_#000]",
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

                    <p className="mt-4 max-w-3xl text-[15px] leading-7 text-black/60">
                        {product.tagline}
                    </p>
                </div>
            </div>

            {/* Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-black/60">
                <div className="flex items-center gap-2">
                    <User className="size-4" />
                    <span>{product.submittedBy}</span>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar className="size-4" />
                    <span>{submittedDate}</span>
                </div>

                {product.websiteUrl && (
                    <Link
                        href={product.websiteUrl}
                        target="_blank"
                        className="flex items-center gap-2 font-medium transition hover:text-black">
                        <ExternalLink className="size-4" />
                        Visit website
                    </Link>
                )}
            </div>

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                        <Badge
                            key={tag}
                            className="rounded-full border-2 border-black bg-[#F9F7F0] px-3 py-1 text-xs font-bold text-black">
                            #{tag}
                        </Badge>
                    ))}
                </div>
            )}

            {/* Footer */}
            <div className="mt-8 flex flex-col gap-4 border-t-2 border-black/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
                <AdminActions
                    productId={product.id}
                    status={product.status ?? ""}
                />

                <Button
                    variant="destructive"
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="w-full lg:w-auto cursor-pointer">
                    <Trash2 className="mr-2 size-4" />

                    {isDeleting ? "Deleting..." : "Delete Product"}
                </Button>
            </div>
        </article>
    );
}

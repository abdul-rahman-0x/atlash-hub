"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    approveProductAction,
    rejectProductAction,
} from "@/lib/admin/admin-actions";
import { ProductType } from "@/types";

export default function AdminActions({
    status,
    productId,
}: {
    status: string;
    productId: ProductType["id"];
}) {
    const handleApprove = async () => {
        await approveProductAction(productId);
    };

    const handleReject = async () => {
        await rejectProductAction(productId);
    };

    return (
        <div>
            {status === "pending" && (
                <div className="flex items-center gap-2">
                    <Button size="sm" variant="approve" onClick={handleApprove}>
                        <Check className="size-3.5" />
                        <span>Approve</span>
                    </Button>

                    <Button size="sm" variant="reject" onClick={handleReject}>
                        <X className="size-3.5" />
                        <span>Reject</span>
                    </Button>
                </div>
            )}
        </div>
    );
}

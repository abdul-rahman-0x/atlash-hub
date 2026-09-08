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
        console.log("Approve");
        await approveProductAction(productId);
    };
    const handleReject = async () => {
        console.log("Reject");
        await rejectProductAction(productId);
    };
    return (
        <div className="space-y-2">
            {status === "pending" && (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="default"
                        className="hover:cursor-pointer"
                        onClick={handleApprove}>
                        <Check className="size-4" />
                        Approve
                    </Button>
                    <Button
                        size="sm"
                        variant="destructive"
                        className="hover:cursor-pointer"
                        onClick={handleReject}>
                        <X className="size-4" />
                        Reject
                    </Button>
                </div>
            )}
        </div>
    );
}

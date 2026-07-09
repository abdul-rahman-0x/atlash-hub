"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { verifyAdmin } from "./verify-admin";
import { ProductType } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

/**
 *
 * These server actions power the internal moderation dashboard.
 *
 * Every action is protected by the centralized verifyAdmin()
 * helper before any database operation is performed.
 *
 * This keeps authentication and authorization logic separated
 * from business logic and makes future RBAC expansion much easier.
 */

/**
 * Approve a pending product submission.
 */
export const approveProductAction = async (productId: ProductType["id"]) => {
    try {
        await verifyAdmin();

        await db
            .update(products)
            .set({
                status: "approved",
                approvedAt: new Date(),
            })
            .where(eq(products.id, productId));

        revalidatePath("/");
        revalidatePath("/admin");

        return {
            success: true,
            message: "Product approved successfully.",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to approve product.",
        };
    }
};

/**
 * Reject a pending product submission.
 */
export const rejectProductAction = async (productId: ProductType["id"]) => {
    try {
        await verifyAdmin();

        await db
            .update(products)
            .set({
                status: "rejected",
            })
            .where(eq(products.id, productId));

        revalidatePath("/admin");

        return {
            success: true,
            message: "Product rejected successfully.",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to reject product.",
        };
    }
};

/**
 * Permanently delete a product.
 *
 * Reserved for spam, malicious submissions,
 * or content that violates platform guidelines.
 */
export const deleteProductAction = async (productId: number) => {
    try {
        await verifyAdmin();

        await db.delete(products).where(eq(products.id, productId));

        revalidatePath("/");
        revalidatePath("/admin");

        return {
            success: true,
            message: "Product deleted successfully.",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to delete product.",
        };
    }
};

"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { ADMIN_EMAILS } from "./admin-config";
import { db } from "@/db";
import { products } from "@/db/schema";
import { ProductType } from "@/types";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const approveProductAction = async (productId: ProductType["id"]) => {
    try {
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
            message: "Product approved",
        };
    } catch {
        return {
            success: false,
            message: "Failed",
        };
    }
};

export const rejectProductAction = async (productId: ProductType["id"]) => {
    console.log("Reject product", productId);
    try {
        await db
            .update(products)
            .set({ status: "rejected" })
            .where(eq(products.id, productId));

        revalidatePath("/admin");

        return {
            success: true,
            message: "Product rejected successfully",
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "Failed to reject product",
        };
    }
};

export const deleteProductAction = async (productId: number) => {
    try {
        await db.delete(products).where(eq(products.id, productId));

        revalidatePath("/admin");
        revalidatePath("/"); // Update landing page if it was approved

        return { success: true, message: "Product purged from registry." };
    } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to delete product." };
    }
};

async function verifyAdmin() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        throw new Error("Unauthorized");
    }

    const isAdmin = ADMIN_EMAILS.includes(session.user.email ?? "");

    if (!isAdmin) {
        throw new Error("Forbidden");
    }

    return session;
}

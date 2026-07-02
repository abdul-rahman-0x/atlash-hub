"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { FormState } from "@/types";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { eq, sql, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { productSchema } from "./product-validations";
import { productVotes } from "@/db/schema";

export const addProductAction = async (
    prevState: FormState,
    formData: FormData,
): Promise<FormState> => {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return {
                success: false,
                message: "You must be signed in to submit a product.",
            };
        }

        const rawFormData = Object.fromEntries(formData.entries());

        const validatedData = productSchema.safeParse(rawFormData);

        if (!validatedData.success) {
            return {
                success: false,
                errors: validatedData.error.flatten().fieldErrors,
                message: "Invalid data",
            };
        }

        const { name, slug, tagline, description, websiteUrl, tags } =
            validatedData.data;

        await db.insert(products).values({
            name,
            slug,
            tagline,
            description,
            websiteUrl,
            tags,
            status: "pending",

            // Better Auth user
            submittedBy: session.user.email ?? "anonymous",
            userId: session.user.id,

            // Better Auth doesn't have organizations by default
            organizationId: null,
        });

        revalidatePath("/");
        revalidatePath("/admin");

        return {
            success: true,
            message: "Product submitted successfully!",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to submit product",
        };
    }
};

export const upvoteProductAction = async (productId: number) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        if (!session?.user) {
            return {
                success: false,
                message: "User not signed in",
            };
        }

        // Check whether this user already voted
        const existingVote = await db
            .select()
            .from(productVotes)
            .where(
                and(
                    eq(productVotes.productId, productId),
                    eq(productVotes.userId, session.user.id),
                ),
            )
            .limit(1);

        if (existingVote.length > 0) {
            return {
                success: false,
                message: "Already voted",
            };
        }

        // Save the vote
        await db.insert(productVotes).values({
            productId,
            userId: session.user.id,
        });

        // Increment product score
        await db
            .update(products)
            .set({
                voteCount: sql`${products.voteCount} + 1`,
            })
            .where(eq(products.id, productId));

        revalidatePath("/");
        revalidatePath("/explore");

        return {
            success: true,
            message: "Vote recorded",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Failed to vote",
        };
    }
};

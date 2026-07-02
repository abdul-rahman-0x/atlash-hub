import { db } from "@/db";
import { products } from "@/db/schema";
import { desc, eq, and, gte } from "drizzle-orm";
import { connection } from "next/server";
import { productVotes } from "@/db/schema";

// 1. SPOTLIGHT: Sorted by most popular (Votes)
export async function getFeaturedProducts() {
    const productsData = await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount))
        .limit(6); // only need the top 6

    return productsData;
}

// 2. LATEST: Sorted by newest (CreateAt)
export async function getRecentProducts() {
    await connection();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return await db
        .select()
        .from(products)
        .where(
            and(
                eq(products.status, "approved"),
                gte(products.createAt, oneWeekAgo), // only items from the last 7 days
            ),
        )
        .orderBy(desc(products.createAt)) // sort by newest first
        .limit(3); // just show the 3 fresh one
}

export async function getProductBySlug(slug: string) {
    const product = await db
        .select()
        .from(products)
        .where(and(eq(products.slug, slug), eq(products.status, "approved")))
        .limit(1);

    return product[0] ?? null;
}

export async function getAllApprovedProducts() {
    return await db
        .select()
        .from(products)
        .where(eq(products.status, "approved"))
        .orderBy(desc(products.voteCount));
}

export async function getAllProducts() {
    const productsData = await db
        .select()
        .from(products)
        .orderBy(desc(products.voteCount));

    return productsData;
}

export async function hasUserVoted(productId: number, userId: string) {
    const vote = await db
        .select()
        .from(productVotes)
        .where(
            and(
                eq(productVotes.productId, productId),
                eq(productVotes.userId, userId),
            ),
        )
        .limit(1);

    return vote.length > 0;
}

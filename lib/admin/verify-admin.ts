import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { isAdmin } from "./admin-config";
import { redirect } from "next/navigation";

/**
 * Centralized authorization helper used by every protected
 * server action and admin route.
 *
 * Authentication  -> Better Auth
 * Authorization   -> RBAC (Admin Role)
 *
 * Any request that reaches an admin-only feature must pass
 * through this helper before performing database operations.
 * This keeps authorization logic consistent across the app.
 */

export async function verifyAdmin() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/sign-in");
    }

    if (!isAdmin(session.user.email)) {
        redirect("/");
    }

    return session;
}

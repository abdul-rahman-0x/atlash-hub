import { auth } from "./auth";
import { headers } from "next/headers";
import { unstable_noStore as noStore } from "next/cache";

export async function getCurrentSession() {
    noStore();

    return auth.api.getSession({
        headers: await headers(),
    });
}

export async function getCurrentUser() {
    const session = await getCurrentSession();
    return session?.user ?? null;
}

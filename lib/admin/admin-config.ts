/**
 * RBAC Configuration
 *
 * This file contains the application's authorization configuration.
 * Authentication is handled by Better Auth, while authorization is
 * controlled here through application-level roles.
 *
 * Keeping this configuration centralized makes it easy to reuse across
 * pages, server actions, middleware, and future role-based features.
 */

/**
 * Users with administrative privileges.
 *
 * These email addresses are granted full access to the internal
 * moderation dashboard and privileged server actions.
 */
export const ADMIN_EMAILS = ["hello.abdul.in@gmail.com"] as const;

/**
 * Returns true when the provided email belongs to an administrator.
 *
 * @param email - The authenticated user's email address.
 */
export function isAdmin(email?: string | null): boolean {
    if (!email) return false;

    return ADMIN_EMAILS.includes(email as (typeof ADMIN_EMAILS)[number]);
}

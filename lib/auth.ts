import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { magicLink } from "better-auth/plugins";
import { Resend } from "resend";
import { db } from "@/db";
import * as schema from "@/db/schema";
import * as authSchema from "@/db/auth-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            ...schema,
            ...authSchema,
        },
    }),
    emailAndPassword: {
        enabled: false,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },
    },
    plugins: [
        magicLink({
            sendMagicLink: async ({ email, url }) => {
                await resend.emails.send({
                    from: "Atlash Hub <onboarding@resend.dev>",
                    to: email,
                    subject: "Sign in to Atlash Hub",
                    html: `
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="utf-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Sign in to Atlash Hub</title>
                        </head>
                        <body style="margin: 0; padding: 40px 16px; background-color: #EFEFEA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td align="center">
                                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 520px; background-color: #F7F7F2; border: 2px solid #0F201D; box-shadow: 4px 4px 0px #0F201D; text-align: left;">
                                            <tr>
                                                <td style="padding: 36px 32px;">
                                                    <div style="margin-bottom: 28px;">
                                                        <span style="display: inline-block; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 16px; font-weight: 900; letter-spacing: 0.18em; color: #0F201D; text-transform: uppercase;">
                                                            ATLASH
                                                        </span>
                                                    </div>

                                                    <h1 style="font-size: 24px; font-weight: 800; color: #0F201D; line-height: 1.25; margin: 0 0 12px 0;">
                                                        Sign in to your Atlash Hub account
                                                    </h1>

                                                    <p style="font-size: 14px; line-height: 1.6; color: #4A5553; margin: 0 0 28px 0;">
                                                        We received an authentication request for <strong style="color: #0F201D;">${email}</strong>. Click the button below to verify your inbox and access your account.
                                                    </p>

                                                    <div style="margin-bottom: 32px;">
                                                        <a href="${url}" target="_blank" style="display: inline-block; background-color: #0F201D; color: #FFFFFF; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; font-weight: 800; text-decoration: none; text-transform: uppercase; letter-spacing: 0.08em; padding: 14px 28px; border: 2px solid #0F201D; box-shadow: 3px 3px 0px #E97B77;">
                                                            Continue to Atlash Hub &rarr;
                                                        </a>
                                                    </div>

                                                    <div style="margin-bottom: 28px;">
                                                        <p style="font-size: 11px; font-weight: 700; color: #717A78; margin: 0 0 8px 0; text-transform: uppercase; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; letter-spacing: 0.05em;">
                                                            Or copy and paste this URL into your browser:
                                                        </p>
                                                        <div style="padding: 10px 12px; background-color: #ECECE6; border: 1px solid #D6DCD6; word-break: break-all;">
                                                            <a href="${url}" style="font-size: 11px; line-height: 1.5; color: #0F201D; text-decoration: underline; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
                                                                ${url}
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <hr style="border: none; border-top: 1px solid #E2E6E2; margin: 28px 0 20px 0;" />

                                                    <p style="font-size: 12px; line-height: 1.5; color: #717A78; margin: 0 0 10px 0;">
                                                        This magic link expires in 15 minutes. If you didn't request this email, you can safely ignore it.
                                                    </p>

                                                    <p style="font-size: 11px; color: #A0A8A5; margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
                                                        &copy; 2026 Atlash Hub. All rights reserved.
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </body>
                        </html>
                    `,
                });
            },
        }),
    ],
});

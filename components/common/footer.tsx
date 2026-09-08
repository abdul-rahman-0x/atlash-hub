import Link from "next/link";
import Image from "next/image";

import logoIcon from "@/app/icon.svg";

const footerLinks = [
    {
        title: "explore",
        links: [
            { label: "directory", href: "/explore" },
            { label: "freshly baked", href: "/explore?sort=recent" },
            { label: "top picks", href: "/explore?sort=featured" },
        ],
    },
    {
        title: "community",
        links: [
            { label: "share work", href: "/submit" },
            { label: "guidelines", href: "/guidelines" },
            { label: "get help", href: "/support" },
        ],
    },
    {
        title: "legal",
        links: [
            { label: "privacy", href: "/privacy" },
            { label: "terms", href: "/terms" },
        ],
    },
    {
        title: "get in touch",
        links: [
            {
                label: "email us",
                href: "mailto:abduls10x@gmail.com",
            },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="overflow-hidden bg-background pt-24 pb-12 font-sans text-[#0f201d]">
            <div className="wrapper relative z-10 mx-auto max-w-6xl px-6">
                <div className="mb-20 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-6">
                    {/* Brand Section */}
                    <div className="col-span-2 space-y-6">
                        <Link
                            href="/"
                            aria-label="Atlash home"
                            className="group flex w-fit items-center gap-3">
                            <Image
                                src={logoIcon}
                                alt="ATLASH Logo"
                                width={28}
                                height={32}
                                className="size-7 shrink-0"
                            />

                            <span className="select-none text-lg font-bold tracking-tight text-[#0f201d]">
                                ATLASH
                            </span>
                        </Link>

                        <p className="max-w-xs text-sm font-medium leading-relaxed text-[#0f201d]/60">
                            A place to share what you build and find cool new
                            things made by builders like you.
                        </p>
                    </div>

                    {/* Navigation Columns */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="space-y-5">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#525252]">
                                {section.title}
                            </h4>

                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-[13px] font-medium capitalize text-[#0f201d] transition-colors duration-150 hover:text-[#E97B77] hover:underline">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 sm:flex-row">
                    <p className="text-xs font-medium tracking-wider text-[#737373]">
                        © 2026{" "}
                        <span className="font-semibold text-[#737373]">
                            Atlash Hub. All rights reserved.
                        </span>
                    </p>

                    <div className="flex items-center text-xs font-medium text-[#737373]">
                        <span className="font-semibold text-[#737373]">
                            Build by Abdul Rahman.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import React from "react";

export default function HeaderSkeleton() {
    return (
        <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
            <div className="max-w-6xl mx-auto h-16 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] flex items-center justify-between px-6">
                {/* Logo & Icon Placeholder */}
                <div className="flex items-center gap-2 animate-pulse">
                    <div className="size-6 bg-stone-200 rounded-md" />
                    <div className="h-5 w-16 bg-stone-200 rounded-md" />
                </div>

                {/* Log In & Get Started Button Placeholders */}
                <div className="flex items-center gap-3 animate-pulse">
                    <div className="h-8 w-14 bg-stone-50 border-2 border-stone-200 rounded-lg" />
                    <div className="h-8 w-24 bg-stone-100 border-2 border-stone-200 rounded-lg" />
                </div>
            </div>
        </div>
    );
}

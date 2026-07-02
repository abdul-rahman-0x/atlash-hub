import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-black transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 shrink-0 border-2 border-black",
    {
        variants: {
            variant: {
                // peach brand color
                default:
                    "bg-[#FFB38A] font-semibold text-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
                destructive:
                    "bg-destructive text-white shadow-[3px_3px_0px_0px_#000] hover:shadow-none",
                // white neobrutalist
                outline:
                    "bg-white font-semibold text-black shadow-[3px_3px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none",
                secondary:
                    "bg-[#B19CFF] font-semibold text-black shadow-[3px_3px_0px_0px_#000] hover:shadow-none",
                ghost: "border-transparent font-semibold shadow-none hover:bg-black/5",
                link: "border-transparent font-semibold text-primary underline-offset-4 hover:underline shadow-none",
            },
            size: {
                sm: "h-9 px-4 text-xs",
                default: "h-10 px-5 text-sm",
                lg: "h-12 px-8 text-base",
                icon: "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };

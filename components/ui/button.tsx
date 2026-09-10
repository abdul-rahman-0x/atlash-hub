import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs font-bold tracking-wide transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 border-2 border-black font-mono select-none cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "bg-[#E97B77] text-[#0F201D] shadow-[5px_5px_0px_0px_#671811] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#671811] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",

                outline:
                    "bg-transparent text-[#0F201D] shadow-[5px_5px_0px_0px_#000000] hover:bg-black/5 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#000000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",

                outlineLight:
                    "bg-transparent text-white border-white/70 shadow-[5px_5px_0px_0px_#2e4742] hover:bg-white hover:text-[#0F201D] hover:border-white/70 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#2e4742] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",

                secondary:
                    "bg-[#B19CFF] text-[#0F201D] shadow-[5px_5px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#000000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",

                ghost: "border-transparent shadow-none hover:bg-black/5 dark:hover:bg-white/5",

                link: "border-transparent text-primary underline-offset-4 hover:underline shadow-none",

                destructive:
                    "bg-red-500 text-white shadow-[5px_5px_0px_0px_#922218] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#922218] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",

                approve:
                    "bg-[#D2ECDB] text-[#0F201D] border-black shadow-[5px_5px_0px_0px_#1B4D2E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1B4D2E] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",

                reject: "bg-[#FAC9C2] text-[#0F201D] border-black shadow-[5px_5px_0px_0px_#671811] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#671811] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",
            },
            size: {
                sm: "h-9 px-4 text-[10px]",
                default: "h-11 px-6 text-xs",
                lg: "h-12 px-8 text-sm",
                xl: "h-16 w-full text-sm",
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

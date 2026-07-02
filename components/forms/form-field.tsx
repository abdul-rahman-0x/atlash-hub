import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

interface FormFieldProps {
    label: string;
    name: string;
    id: string;
    placeholder?: string;
    required: boolean;
    onChange: (
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ) => void;
    error: string[];
    helperText?: string;
    textarea?: boolean;
}

export const FormField = ({
    label,
    name,
    id,
    placeholder,
    required,
    onChange,
    error,
    helperText,
    textarea,
}: FormFieldProps) => {
    const hasError = error.length > 0;

    return (
        <div className="space-y-2.5 w-full group">
            {/* 1. INDUSTRIAL LABEL: High tracking and black weight */}
            <Label
                htmlFor={id}
                className="text-[10px] font-black uppercase tracking-[0.25em] text-foreground/50 ml-1 flex items-center gap-1.5 transition-colors group-focus-within:text-primary">
                {label}
                {required && (
                    <span className="text-primary text-xs leading-none">*</span>
                )}
            </Label>

            {/* 2. INPUT / TEXTAREA: Deep contrast with Sage focus */}
            {textarea ? (
                <Textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    className={cn(
                        "min-h-[140px] bg-background border-2 border-foreground/5 focus:border-primary/50 rounded-xl transition-all resize-none px-4 py-4 text-base font-medium placeholder:text-muted-foreground/30 shadow-inner",
                        hasError &&
                            "border-destructive/50 focus:border-destructive",
                    )}
                    onChange={
                        onChange as (
                            e: React.ChangeEvent<HTMLTextAreaElement>,
                        ) => void
                    }
                />
            ) : (
                <Input
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    aria-invalid={hasError}
                    className={cn(
                        "h-13 bg-background border-2 border-foreground/5 focus:border-primary/50 rounded-xl transition-all px-4 text-base font-medium placeholder:text-muted-foreground/30 shadow-inner",
                        hasError &&
                            "border-destructive/50 focus:border-destructive",
                    )}
                    onChange={
                        onChange as (
                            e: React.ChangeEvent<HTMLInputElement>,
                        ) => void
                    }
                />
            )}

            {/* 3. SYSTEM FEEDBACK: Errors and Infrastructure Hints */}
            {(helperText || hasError) && (
                <div className="px-1 pt-1">
                    {hasError ? (
                        <p className="text-[11px] font-black text-destructive uppercase tracking-widest flex items-center gap-1.5 animate-in slide-in-from-left-2">
                            <AlertCircle className="size-3" />
                            System Error: {error.join(", ")}
                        </p>
                    ) : helperText ? (
                        <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-[0.15em] ml-1 flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-primary/40" />
                            {helperText}
                        </p>
                    ) : null}
                </div>
            )}
        </div>
    );
};

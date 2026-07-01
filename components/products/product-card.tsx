import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "./voting-buttons";

type Product = InferSelectModel<typeof products>;

export default function ProductCard({ product }: { product: Product }) {
    const hasVoted = false;

    return (
        <Link href={`/products/${product.slug}`} className="block group">
            <Card className="relative h-full bg-white border-2 border-black rounded-2xl transition-all shadow-[6px_6px_0px_0px_#000] group-hover:shadow-none group-hover:translate-x-[3px] group-hover:translate-y-[3px] overflow-hidden">
                {product.voteCount > 50 && (
                    <div className="absolute top-0 right-0">
                        <div className="bg-[#B19CFF] text-black border-l-2 border-b-2 border-black text-[10px] font-black px-3 py-1.5 rounded-bl-xl flex items-center gap-1.5 lowercase shadow-[2px_2px_0px_0px_#000]">
                            <Sparkles className="size-3" />
                            featured
                        </div>
                    </div>
                )}

                <CardHeader className="space-y-4 pt-10 px-6">
                    <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1 min-w-0">
                            <CardTitle className="text-xl font-black text-black truncate">
                                {product.name}
                            </CardTitle>
                            <CardDescription className="text-sm font-medium text-black/60 lowercase line-clamp-2">
                                {product.tagline}
                            </CardDescription>
                        </div>

                        <div className="shrink-0">
                            <VotingButtons
                                productId={product.id}
                                voteCount={product.voteCount}
                                hasVoted={hasVoted}
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardFooter className="pb-6 px-6">
                    <div className="flex flex-wrap items-center gap-2">
                        {product.tags?.map((tag) => (
                            <Badge
                                variant="outline"
                                key={tag}
                                className="bg-black/5 border-black/10 lowercase font-bold text-[10px] px-3 py-1 text-black/70 rounded-md">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}

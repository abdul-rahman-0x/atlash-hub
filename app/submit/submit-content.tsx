import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProductSubmitForm from "@/components/products/product-submit-form";

export default async function SubmitContent() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        redirect("/sign-in");
    }

    return <ProductSubmitForm />;
}

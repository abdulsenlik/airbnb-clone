import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
    listingId?: string;
}

// ✅ FIXED: Proper `POST` request handling
export async function POST(request: Request, { params }: { params: IParams }) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { listingId } = params;
        if (!listingId || typeof listingId !== "string") {
            return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
        }

        let favoriteIds = [...(currentUser.favoriteIds || [])];

        if (!favoriteIds.includes(listingId)) {
            favoriteIds.push(listingId);
        }

        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds },
        });

        return NextResponse.json(user, { status: 201 }); // ✅ Use 201 Created
    } catch (error) {
        console.error("Favorite POST API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// ✅ FIXED: Ensure `DELETE` function name is properly cased
export async function DELETE(request: Request, { params }: { params: IParams }) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { listingId } = params;
        if (!listingId || typeof listingId !== "string") {
            return NextResponse.json({ error: "Invalid listing ID" }, { status: 400 });
        }

        let favoriteIds = [...(currentUser.favoriteIds || [])];

        favoriteIds = favoriteIds.filter((id) => id !== listingId);

        const user = await prisma.user.update({
            where: { id: currentUser.id },
            data: { favoriteIds },
        });

        return NextResponse.json(user, { status: 200 }); // ✅ Use 200 for success
    } catch (error) {
        console.error("Favorite DELETE API error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

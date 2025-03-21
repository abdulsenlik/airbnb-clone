import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 }); // ✅ Use 401 for unauthorized
        }

        const body = await request.json();
        const { listingId, startDate, endDate, totalPrice } = body;

        if (!listingId || !startDate || !endDate || !totalPrice) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 }); // ✅ Use 400 for bad requests
        }

        // ✅ Use `create()` instead of `update()` to create a reservation entry
        const reservation = await prisma.reservation.create({
            data: {
                userId: currentUser.id,
                listingId,
                startDate,
                endDate,
                totalPrice,
            },
        });

        return NextResponse.json(reservation, { status: 201 }); // ✅ Use 201 Created for success
    } catch (error) {
        console.error("Reservation error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

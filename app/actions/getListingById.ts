import prisma from "@/app/libs/prismadb";
import { ObjectId } from "bson"; 

interface IParams {
    listingId?: string;
}

export default async function getListingsById(
    params: IParams
) {
    try {
        const {listingId} = params;

        if (!listingId || typeof listingId !== "string") {
            throw new Error("Invalid listing ID format.");
        }

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId,
            },
            include: {
                user: true,
            }
        });

        if(!listing){
            return null;
        }

        return {
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toISOString(),
                updatedAt: listing.user.updatedAt.toISOString(),
                emailVerified:
                    listing.user.emailVerified?.toISOString() || null,
            }
        };
        
    } catch (error: any) {
        throw new Error(error);
    }
}
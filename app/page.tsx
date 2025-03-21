export const dynamic = "force-dynamic";
import { Suspense } from "react";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListings";
import CleintOnly from "./components/CleintOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
   searchParams?: URLSearchParams;
}

const Home = async ({ searchParams }: HomeProps) => {
   const params = new URLSearchParams(await searchParams); // ✅ Await searchParams

   const listingParams: IListingParams = {
      userId: params.get("userId") || undefined,
      guestCount: params.get("guestCount") ? Number(params.get("guestCount")) : undefined,
      roomCount: params.get("roomCount") ? Number(params.get("roomCount")) : undefined,
      bathroomCount: params.get("bathroomCount") ? Number(params.get("bathroomCount")) : undefined,
      startDate: params.get("startDate") || undefined,
      endDate: params.get("endDate") || undefined,
      locationValue: params.get("locationValue") || undefined,
      category: params.get("category") || undefined,
   };

   const listings = await getListings(listingParams);
   const currentUser = await getCurrentUser();

   if (listings.length === 0) {
      return (
         <CleintOnly>
            <EmptyState showReset />
         </CleintOnly>
      );
   }

   return (
      <CleintOnly>
         <Container>
            <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
               {listings.map((listing) => (
                  <ListingCard key={listing.id} data={listing} currentUser={currentUser} />
               ))}
            </div>
         </Container>
      </CleintOnly>
   );
};

export default function HomeWithSuspense(props: HomeProps) {
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <Home {...props} />
      </Suspense>
   );
}

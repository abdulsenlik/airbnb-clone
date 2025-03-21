export const dynamic = "force-dynamic";

import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IListingParams } from "./actions/getListings";
import CleintOnly from "./components/CleintOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";

interface HomeProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomeProps) {
  const listingParams: IListingParams = {
    userId: searchParams?.userId as string,
    guestCount: searchParams?.guestCount ? Number(searchParams.guestCount) : undefined,
    roomCount: searchParams?.roomCount ? Number(searchParams.roomCount) : undefined,
    bathroomCount: searchParams?.bathroomCount ? Number(searchParams.bathroomCount) : undefined,
    startDate: searchParams?.startDate as string,
    endDate: searchParams?.endDate as string,
    locationValue: searchParams?.locationValue as string,
    category: searchParams?.category as string,
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
}

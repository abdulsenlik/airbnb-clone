/* eslint-disable */
import EmptyState from "@/app/components/EmptyState";
import CleintOnly from "@/app/components/CleintOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getFavoriteListings from "@/app/actions/getFavoriteListing";

import FavoritesClient from "./FavoritesClient";

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <CleintOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorite listings."
        />
      </CleintOnly>
    );
  }

  return (
    <CleintOnly>
      <FavoritesClient
        listings={listings}
        currentUser={currentUser}
      />
    </CleintOnly>
  );
}
 
export default ListingPage;
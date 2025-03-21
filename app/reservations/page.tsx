
import EmptyState from "@/app/components/EmptyState";
import TripsClient from "./ReservationsClient";
import CleintOnly from "@/app/components/CleintOnly";

import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";


const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <CleintOnly> 
        <EmptyState
          title="Unauthorized"
          subtitle="Please login"
        />
      </CleintOnly>
    )
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <CleintOnly>
        <EmptyState
          title="No reservations found"
          subtitle="Looks like you have no reservations on your properties."
        />
      </CleintOnly>
    );
  }

  return (
    <CleintOnly>
      <TripsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </CleintOnly>
  );
}
 
export default ReservationsPage;
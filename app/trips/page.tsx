import EmptyState from "../components/EmptyState";
import CleintOnly from "../components/CleintOnly";
import TripsClient from "./TripsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";


const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <CleintOnly>
                <EmptyState
                    title="Unathorized"
                    subtitle="Please login"
                />
            </CleintOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });

    if (reservations.length == 0) {
        return (
            <CleintOnly>
                <EmptyState
                    title="No trips found"
                    subtitle="looks like you havent reserved any trips."
                />
            </CleintOnly>
        )
    }

    return (
        <CleintOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </CleintOnly>
    )
}

export default TripsPage;
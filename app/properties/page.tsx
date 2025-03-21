import EmptyState from "../components/EmptyState";
import CleintOnly from "../components/CleintOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage = async () => {
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

    const listings = await getListings({
        userId: currentUser.id
    });

    if (listings.length == 0) {
        return (
            <CleintOnly>
                <EmptyState
                    title="No Properties found"
                    subtitle="looks like you havent reserved any trips."
                />
            </CleintOnly>
        )
    }

    return (
        <CleintOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </CleintOnly>
    )
}

export default PropertiesPage;
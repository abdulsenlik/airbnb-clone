
import getListingsById from '@/app/actions/getListingById';
import CleintOnly from '@/app/components/CleintOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'
import ListingClient from './ListingClient';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '@/app/actions/getReservations';

interface IParams {
    listingId?: string;
}

const ListingPage = async ( {params} : {params: IParams}) => {
    const listing = await getListingsById(params);
    const reservations = await getReservations(params);
    const currentUser = await getCurrentUser();


    if(!listing){
        return (
            <CleintOnly>
                <EmptyState />
            </CleintOnly>
        )
    }
  return (
 
      <CleintOnly>
            <ListingClient
                listing = {listing}
                reservations={reservations}
                currentUser= {currentUser}
            />
           
    </CleintOnly>
  
  );
}

export default ListingPage;

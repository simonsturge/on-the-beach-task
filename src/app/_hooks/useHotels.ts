import { useCallback, useEffect, useState } from 'react';
import { mockHotels } from '@/app/_assets/hotels';
import { HotelData } from '@/app/_types/hotel-data';

export const useHotels = () => {
  const [hotels, setHotels] = useState<HotelData[]>(mockHotels);

  /**
   * Here I would have usually communicated with a server to retreive the hotels
   * The benefit of doing this in a hook is that is can own the states for loading, errors and bookings, instead of the state being directly in the component
   */
  const fetchHotels = useCallback(async () => {
    setHotels(mockHotels);
  }, []);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);

  return {
    hotels,
  };
};

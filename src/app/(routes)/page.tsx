'use client';

import HotelList from '@/app/_components/HotelList';

import { useHotels } from '@/app/_hooks/useHotels';

export default function Home() {
  const { hotels } = useHotels();

  return (
    <div className="flex w-full justify-center items-center m-16">
      <HotelList hotels={hotels} />
    </div>
  );
}

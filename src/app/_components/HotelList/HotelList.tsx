import Hotel from '@/app/_components/Hotel';
import SortMenu from '@/app/_components/SortMenu';

import { HotelData, hotelSortCompareFn } from '@/app/_types/hotel-data';
import { useMemo, useState } from 'react';
import { SortOption } from '@/app/_types/sort-option';

type HotelListProps = {
  hotels: HotelData[];
};

const HotelList = ({ hotels }: HotelListProps) => {
  const [sortOption, setSortOption] = useState<SortOption>('price');

  const sortedHotels = useMemo(
    () => hotels.sort(hotelSortCompareFn(sortOption)),
    [hotels, sortOption],
  );

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:space-x-12">
      <SortMenu selectedSortOption={sortOption} onSort={setSortOption} />
      <div className="flex flex-col space-y-6">
        {sortedHotels.map(h => (
          <Hotel key={h.name} hotel={h} />
        ))}
      </div>
    </div>
  );
};

export default HotelList;

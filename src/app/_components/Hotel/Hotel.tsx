import HotelBookButton from '@/app/_components/Hotel/HotelBookButton';
import HotelOccupants from '@/app/_components/Hotel/HotelOccupants';
import ExpandButton from '@/app/_components/ExpandButton';
import StarRating from '@/app/_components/StarRating';
import Image from 'next/image';

import { useCallback, useState } from 'react';
import { HotelData } from '@/app/_types/hotel-data';

type HotelProps = {
  hotel: HotelData;
};

const Hotel = ({ hotel }: HotelProps) => {
  const [overviewExpanded, setOveriewExpanded] = useState(false);

  return (
    <div className="flex flex-col w-[720px] bg-white">
      <div className="flex flex-row ">
        <div className="w-4/6 relative">
          <Image
            src={`/hotels/${hotel.image}`}
            alt="Hotel"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
            unoptimized
          />
          <ExpandButton
            className="absolute p-3 left-0 bottom-0 w-60"
            expended={overviewExpanded}
            onExpand={setOveriewExpanded}>
            <p className="text-primary text-xs">
              <strong>Read {overviewExpanded ? 'less' : 'more'}</strong> about
              this hotel
            </p>
          </ExpandButton>
        </div>
        <div className="m-4 w-2/6">
          <HotelInformation hotel={hotel} />
        </div>
      </div>
      {overviewExpanded && (
        <div className="m-6 space-y-4">
          <p className="text-xs text-primary font-semibold">Overview</p>
          <p className="text-xs text-darkGray">{hotel.overview}</p>
        </div>
      )}
    </div>
  );
};

type HotelInformationProps = {
  hotel: HotelData;
};

const HotelInformation = ({ hotel }: HotelInformationProps) => {
  const onBook = useCallback(() => {
    alert(`Booking a holiday at ${hotel.name}, congratulations!`);
  }, [hotel]);

  return (
    <div className="flex flex-col space-y-3 w-full">
      <div className="flex flex-col space-y-1">
        <p className="text-small text-primary font-semibold">{hotel.name}</p>
        <p className="text-xs text-grey font-base">{hotel.location}</p>
      </div>
      <StarRating rating={hotel.rating} />
      <div className="flex flex-col space-y-1">
        <HotelOccupants
          adultCount={hotel.adultCount}
          childrenCount={hotel.childCount}
          infantCount={hotel.infantCount}
        />
        <p className="text-xs text-darkGray font-base">
          <b>{hotel.date}</b> for <b>{hotel.days}</b> days
        </p>
        <p className="text-xs text-darkGray font-base">
          departing from <strong>{hotel.departingLocation}</strong>
        </p>
      </div>
      <HotelBookButton price={hotel.price} onBook={onBook} />
    </div>
  );
};

export default Hotel;

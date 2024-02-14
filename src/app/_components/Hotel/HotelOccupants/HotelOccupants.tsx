import { useMemo } from 'react';

type HotelOccupantsProps = {
  adultCount: number;
  childrenCount: number;
  infantCount: number;
};

const HotelOccupants = ({
  adultCount,
  childrenCount,
  infantCount,
}: HotelOccupantsProps) => {
  const occupants = useMemo(() => {
    /**
     * Given more time I would try and handle plurals with a translation lib like i18n
     */
    const adults =
      adultCount === 0 ? null : adultCount === 1 ? 'adult' : 'adults';
    const children =
      childrenCount === 0 ? null : childrenCount === 1 ? 'child' : 'children';
    const infants =
      infantCount === 0 ? null : infantCount === 1 ? 'infant' : 'infants';
    return (
      <p>
        {adults && (
          <>
            <strong>{adultCount} </strong>
            {adults}
          </>
        )}
        {children && (
          <>
            {adults && <>, </>}
            <strong>{childrenCount} </strong>
            {children}
          </>
        )}
        {infants && (
          <>
            {(adults || children) && <> & </>}
            <strong>{infantCount} </strong>
            {infants}
          </>
        )}
      </p>
    );
  }, [adultCount, childrenCount, infantCount]);
  return <div className="text-xs text-darkGray">{occupants}</div>;
};

export default HotelOccupants;

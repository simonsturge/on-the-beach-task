import Icon from '@/app/_components/Icon';

import { useMemo } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const stars = useMemo(
    () =>
      Array.from(Array(rating), (_, index) => (
        <div data-testid="star-rating-icon" key={index}>
          <Icon className="text-yellow" icon={faStar} />
        </div>
      )),
    [rating],
  );
  return <div className="flex flex-row space-x-1">{stars}</div>;
};

export default StarRating;

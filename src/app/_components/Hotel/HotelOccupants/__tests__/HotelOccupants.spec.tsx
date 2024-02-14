import withMarkup from '@/app/__tests__/helpers/withMarkup';
import StarRating from '@/app/_components/StarRating';

import { render } from '@testing-library/react';
import HotelOccupants from '..';

describe('HotelOccupants Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('hotel occupants should return correct display text - 0', async () => {
    const expected = '2 adults, 1 child & 6 infants';
    const { getByText } = render(
      <HotelOccupants adultCount={2} childrenCount={1} infantCount={6} />,
    );
    const getByTextWithMarkup = withMarkup(getByText);
    const element = getByTextWithMarkup(expected);
    expect(element).toBeInTheDocument();
  });

  it('hotel occupants should return correct display text - 1', async () => {
    const expected = '1 adult, 6 children';
    const { getByText } = render(
      <HotelOccupants adultCount={1} childrenCount={6} infantCount={0} />,
    );
    const getByTextWithMarkup = withMarkup(getByText);
    const element = getByTextWithMarkup(expected);
    expect(element).toBeInTheDocument();
  });
});

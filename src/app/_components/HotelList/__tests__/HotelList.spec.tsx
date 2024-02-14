import withMarkup from '@/app/__tests__/helpers/withMarkup';
import HotelList from '@/app/_components/HotelList';

import { mockHotels } from '@/app/_assets/hotels';
import { render } from '@testing-library/react';

describe('HotelList Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('hotel list component should include sort menu items', async () => {
    const { getByText } = render(<HotelList hotels={mockHotels} />);
    const getByTextWithMarkup = withMarkup(getByText);
    const alphabeticallyElement = getByTextWithMarkup('sort alphabetically');
    expect(alphabeticallyElement).toBeInTheDocument();
  });

  it('hotel list component should include hotels', async () => {
    const { getByText } = render(<HotelList hotels={mockHotels} />);
    const hotel = getByText('Iberostar Grand Salome');
    expect(hotel).toBeInTheDocument();
  });
});

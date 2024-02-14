import withMarkup from '@/app/__tests__/helpers/withMarkup';
import Hotel from '@/app/_components/Hotel';

import { mockHotels } from '@/app/_assets/hotels';
import { render } from '@testing-library/react';

describe('Hotel Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('hotel should contain correct title', async () => {
    const hotel = mockHotels[0];
    const { getByText } = render(<Hotel hotel={hotel} />);
    const element = getByText(hotel.name);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('text-small text-primary font-semibold');
  });

  it('hotel should contain correct location', async () => {
    const hotel = mockHotels[0];
    const { getByText } = render(<Hotel hotel={hotel} />);
    const element = getByText(hotel.location);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('text-xs text-grey font-base');
  });

  it('hotel should contain correct star ratings', async () => {
    const hotel = mockHotels[0];
    const { getAllByTestId } = render(<Hotel hotel={hotel} />);
    const elements = getAllByTestId('star-rating-icon');
    expect(elements).toHaveLength(hotel.rating);
  });

  it('hotel should contain correct occupants', async () => {
    const hotel = mockHotels[0];
    const { getByText } = render(<Hotel hotel={hotel} />);
    const getByTextWithMarkup = withMarkup(getByText);
    const element = getByTextWithMarkup('2 adults, 2 children & 1 infant');
    expect(element).toBeInTheDocument();
  });

  it('hotel should contain correct date and days', async () => {
    const hotel = mockHotels[0];
    const { getByText } = render(<Hotel hotel={hotel} />);
    const getByTextWithMarkup = withMarkup(getByText);
    const element = getByTextWithMarkup(`${hotel.date} for ${hotel.days} days`);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('text-xs text-darkGray font-base');
  });

  it('hotel should contain correct departing location', async () => {
    const hotel = mockHotels[0];
    const { getByText } = render(<Hotel hotel={hotel} />);
    const getByTextWithMarkup = withMarkup(getByText);
    const element = getByTextWithMarkup(
      `departing from ${hotel.departingLocation}`,
    );
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('text-xs text-darkGray font-base');
  });
});

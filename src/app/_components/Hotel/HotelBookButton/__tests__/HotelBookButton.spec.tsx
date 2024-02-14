import withMarkup from '@/app/__tests__/helpers/withMarkup';

import HotelBookButton from '@/app/_components/Hotel/HotelBookButton';

import { fireEvent, render } from '@testing-library/react';

describe('HotelBookButton Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('hotel book button should contain expected text and price', async () => {
    const { getByText } = render(
      <HotelBookButton price={111.12} onBook={jest.fn()} />,
    );
    const getByTextWithMarkup = withMarkup(getByText);
    const titleElement = getByTextWithMarkup('Book now');
    const priceElement = getByTextWithMarkup('£111.12');
    expect(titleElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('hotel book button should contain expected text and price classes', async () => {
    const { getByText } = render(
      <HotelBookButton price={111.12} onBook={jest.fn()} />,
    );
    const getByTextWithMarkup = withMarkup(getByText);
    const titleElement = getByTextWithMarkup('Book now');
    const priceElement = getByTextWithMarkup('£111.12');
    expect(titleElement).toHaveClass('text-xs font-semibold text-primary');
    expect(priceElement).toHaveClass('text-xl font-semibold text-primary');
  });

  it('hotel book button should call on book when button pressed', async () => {
    const mockOnBook = jest.fn();
    const { getByRole } = render(
      <HotelBookButton price={111.12} onBook={mockOnBook} />,
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnBook).toHaveBeenCalled();
  });
});

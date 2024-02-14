import withMarkup from '@/app/__tests__/helpers/withMarkup';
import SortMenu from '@/app/_components/SortMenu';

import { SortOption } from '@/app/_types/sort-option';
import { render, fireEvent } from '@testing-library/react';

describe('SortMenu Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('sort menu should contain all sort options', async () => {
    const { getByText } = render(
      <SortMenu selectedSortOption={'price'} onSort={jest.fn()} />,
    );
    const getByTextWithMarkup = withMarkup(getByText);

    const alphabeticallyElement = getByTextWithMarkup('sort alphabetically');
    const priceElement = getByTextWithMarkup('sort by price');
    const ratingElement = getByTextWithMarkup('sort by star rating');

    expect(alphabeticallyElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(ratingElement).toBeInTheDocument();
  });

  it('sort menu should call onSort when option selected', async () => {
    const mockOnSort = jest.fn();
    const expectedSortOption: SortOption = 'price';
    const { getByText } = render(
      <SortMenu selectedSortOption={'alphabetically'} onSort={mockOnSort} />,
    );
    const getByTextWithMarkup = withMarkup(getByText);
    const priceElement = getByTextWithMarkup('sort by price');
    fireEvent.click(priceElement);
    expect(mockOnSort).toHaveBeenCalledWith(expectedSortOption);
  });
});

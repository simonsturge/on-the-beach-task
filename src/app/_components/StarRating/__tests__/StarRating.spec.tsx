import StarRating from '@/app/_components/StarRating';

import { render } from '@testing-library/react';

describe('StarRating Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('star rating should contain expected number of stars', async () => {
    const expectedNumberOfIcons = Math.floor(Math.random() * 5) + 1;
    const { getAllByTestId } = render(
      <StarRating rating={expectedNumberOfIcons} />,
    );
    const elements = getAllByTestId('star-rating-icon');
    expect(elements).toHaveLength(expectedNumberOfIcons);
  });
});

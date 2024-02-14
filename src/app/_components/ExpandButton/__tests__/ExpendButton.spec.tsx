import ExpandButton from '@/app/_components/ExpandButton';

import { fireEvent, render } from '@testing-library/react';

describe('ExpendButton Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('expend button should have the correct classes', async () => {
    const { getByRole } = render(
      <ExpandButton expended={false} onExpand={jest.fn()}>
        The content
      </ExpandButton>,
    );
    const button = getByRole('button');
    expect(button).toHaveClass(
      'flex flex-row justify-center space-x-4 items-center bg-white h-6',
    );
  });

  it('expend button should call on expended when pressed', async () => {
    const mockOnExpend = jest.fn();
    const { getByRole } = render(
      <ExpandButton expended={false} onExpand={mockOnExpend}>
        The content
      </ExpandButton>,
    );
    const button = getByRole('button');
    fireEvent.click(button);
    expect(mockOnExpend).toHaveBeenCalledWith(true);
  });
});

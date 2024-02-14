import { renderHook, waitFor } from '@testing-library/react';
import { mockHotels } from '@/app/_assets/hotels';
import { useHotels } from '@/app/_hooks/useHotels';

describe('useHotels', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch parcs on mount', async () => {
    const { result, rerender } = renderHook(() => useHotels());
    rerender();
    await waitFor(() => {
      expect(result.current.hotels).toBe(mockHotels);
    });
  });
});

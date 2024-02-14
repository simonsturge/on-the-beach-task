import { SortOption } from '@/app/_types/sort-option';

export type HotelData = {
  image: string;
  name: string;
  location: string;
  rating: number;
  adultCount: number;
  childCount: number;
  infantCount: number;
  date: string;
  days: number;
  departingLocation: string;
  price: number;
  overview: string;
};

export const hotelSortCompareFn = (option: SortOption) => {
  switch (option) {
    case 'alphabetically':
      return (h1: HotelData, h2: HotelData) => (h1.name < h2.name ? -1 : 1);
    case 'price':
      return (h1: HotelData, h2: HotelData) => h1.price - h2.price;
    case 'rating':
      return (h1: HotelData, h2: HotelData) => (h1.rating > h2.rating ? -1 : 1);
  }
};

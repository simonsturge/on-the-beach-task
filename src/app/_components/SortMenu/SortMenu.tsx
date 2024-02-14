import Menu from '@/app/_components/Menu';

import {
  faArrowUpAZ,
  faStar,
  faSterlingSign,
} from '@fortawesome/free-solid-svg-icons';

import { MenuItemProps } from '@/app/_components/Menu/MenuItem/MenuItem';
import { SortOption } from '@/app/_types/sort-option';
import { useMemo } from 'react';

type SortMenuItemProps = {
  prefix: string;
  option: string;
  selected: boolean;
};

const SortMenuItem = ({ prefix, option, selected }: SortMenuItemProps) => {
  return (
    <div
      className={`w-full text-base line-clamp-1 text-left ${
        selected ? 'text-white' : 'text-primary'
      }`}>
      {prefix} <strong>{option}</strong>
    </div>
  );
};

type SortMenuProps = {
  selectedSortOption: SortOption;
  onSort: (option: SortOption) => void;
};

const SortMenu = ({ selectedSortOption, onSort }: SortMenuProps) => {
  const items: MenuItemProps[] = useMemo(() => {
    return [
      {
        children: (
          <SortMenuItem
            prefix="sort"
            option="alphabetically"
            selected={selectedSortOption === 'alphabetically'}
          />
        ),
        icon: faArrowUpAZ,
        selected: selectedSortOption === 'alphabetically',
        onClick: () => onSort('alphabetically'),
      },
      {
        children: (
          <SortMenuItem
            prefix="sort by"
            option="price"
            selected={selectedSortOption === 'price'}
          />
        ),
        icon: faSterlingSign,
        selected: selectedSortOption === 'price',
        onClick: () => onSort('price'),
      },
      {
        children: (
          <SortMenuItem
            prefix="sort by"
            option="star rating"
            selected={selectedSortOption === 'rating'}
          />
        ),
        icon: faStar,
        selected: selectedSortOption === 'rating',
        onClick: () => onSort('rating'),
      },
    ];
  }, [selectedSortOption, onSort]);

  return <Menu items={items} />;
};

export default SortMenu;

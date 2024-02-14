import Icon from '@/app/_components/Icon';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from 'react';

export type MenuItemProps = {
  className?: string;
  children: ReactNode;
  onClick: () => void;
  selected: boolean;
  icon?: IconDefinition;
};

const MenuItem = ({
  className,
  children,
  onClick,
  selected,
  icon,
}: MenuItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row space-x-12 lg:w-64 h-12 justify-center items-center ${
        selected ? 'bg-primary' : 'bg-white'
      } pl-4 pr-4 ${className}`}>
      {children}
      {icon && (
        <div className="flex flex-row w-8 justify-center items-center">
          <Icon
            className={`${selected ? 'text-white' : 'text-gray'}`}
            icon={icon}
          />
        </div>
      )}
    </button>
  );
};

export default MenuItem;

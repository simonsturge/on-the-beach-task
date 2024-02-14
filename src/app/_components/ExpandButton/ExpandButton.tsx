import Icon from '@/app/_components/Icon';

import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { ReactNode, useCallback } from 'react';

type ExpandButtonProps = {
  expended: boolean;
  onExpand: (expanded: boolean) => void;
  children: ReactNode;
  className?: string;
};

const ExpandButton = ({
  expended,
  children,
  onExpand,
  className,
}: ExpandButtonProps) => {
  const onClick = useCallback(() => {
    onExpand(!expended);
  }, [expended, onExpand]);

  return (
    <button
      onClick={onClick}
      className={`flex flex-row justify-center space-x-4 items-center bg-white h-6 ${className}`}>
      {children}
      <Icon
        className="text-primary"
        icon={expended ? faChevronDown : faChevronRight}
      />
    </button>
  );
};

export default ExpandButton;

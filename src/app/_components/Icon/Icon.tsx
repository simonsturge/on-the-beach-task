import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type IconProps = {
  className?: string;
  icon: IconDefinition;
};

const Icon = ({ className, icon }: IconProps) => (
  <FontAwesomeIcon className={`text-grey ${className}`} icon={icon} />
);

export default Icon;

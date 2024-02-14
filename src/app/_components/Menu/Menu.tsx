import MenuItem, {
  MenuItemProps,
} from '@/app/_components/Menu/MenuItem/MenuItem';

type MenuProps = {
  className?: string;
  items: MenuItemProps[];
};

const Menu = ({ className, items }: MenuProps) => {
  return (
    <div className={`space-y-0.5 flex flex-col ${className}`}>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Menu;

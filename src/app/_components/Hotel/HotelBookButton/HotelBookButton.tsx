type HotelBookButtonProps = {
  price: number;
  onBook: () => void;
};

let formatter = Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});

const HotelBookButton = ({ price, onBook }: HotelBookButtonProps) => {
  return (
    <button
      onClick={onBook}
      className="flex flex-col w-full justify-center items-center bg-yellow rounded-md h-16">
      <p className="text-xs font-semibold text-primary">Book now</p>
      <p className="text-xl font-semibold text-primary">
        {formatter.format(price)}
      </p>
    </button>
  );
};

export default HotelBookButton;

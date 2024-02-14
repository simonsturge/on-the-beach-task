import Image from 'next/image';

import { ReactNode } from 'react';

type BackgroundProps = {
  children: ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative overflow-hidden ">
      <Image
        className="absolute inset-0 -z-10 bg-repeat"
        src="/background.png"
        alt="Background"
        fill
      />
      <div className="z-10 flex h-full justify-center">{children}</div>
    </div>
  );
};

export default Background;

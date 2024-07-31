import clsx from 'clsx';
import Image from 'next/image';
import { HTMLProps } from 'react';

const Loading = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
   return (
      <div className={clsx('w-full')} {...props}>
         <Image
            className="w-full object-contain"
            src="/images/Bangboo_Net_Loading.webp"
            alt="ladding"
            width={500}
            height={400}
         />
      </div>
   );
};
export default Loading;

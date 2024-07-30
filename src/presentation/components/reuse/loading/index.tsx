import clsx from 'clsx';
import { HTMLProps } from 'react';
import Image from 'next/image';

const Loading = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
   return (
      <div className={clsx('w-full')} {...props}>
         <Image src="/images/Bangboo_Net_Loading.webp" alt="ladding" width={300} height={100} sizes={"100vw"}/>
      </div>
   );
};
export default Loading;

import clsx from 'clsx';
import { HTMLProps } from 'react';

const Loading = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={clsx('w-full')} {...props}>
      <img src="/images/Bangboo_Net_Loading.webp" alt="ladding" />
    </div>
  );
};
export default Loading;

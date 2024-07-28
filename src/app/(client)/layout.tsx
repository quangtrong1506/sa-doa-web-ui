'use client';
import Header from '@/presentation/components/header';
import Loading from '@/presentation/components/reuse/loading';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const Layout = ({
                  children,
                }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      <div className="relative h-[55px] w-full">
        <div className="fixed w-full h-[55px] bg-white dark:bg-bgContent_d shadow-md border-b dark:border-white/15 z-50 px-1 lg:px-6 ">
          <Header />
        </div>
      </div>
      <div className={clsx('bg-bgBody_l dark:bg-bgBody_d', mounted ? '' : 'hidden')}>
        {children}
      </div>
      {!mounted && (
        <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 w-full bg-white dark:bg-bgContent_d z-[99999]">
          <div className="w-full h-full relative">
            <div className="absolute min-[480px]:bottom-5 min-[480px]:right-3 flex justify-center items-center max-[480px]:top-1/2 max-[480px]-translate-y-1/2">
              <div className="w-4/5 min-[480px]:w-[400px]">
                <Loading />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;

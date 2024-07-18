'use client';
import { NAV_LINK } from '@/constants/jsx-constants';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useClickAway, useWindowSize } from 'react-use';
import NavBarIcon from '../icons/nav-bar.icon';
import XMarkIcon from '../icons/xmark.icon';
import NavItem from '../reuse/nav/nav-item';
import AuthHeader from './auth.header';
import NavHeader from './nav.header';
import SearchHeader from './search.header';

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const NavRef = useRef<HTMLDivElement>(null);
  useClickAway(NavRef, () => setShowNav(false));
  let { width } = useWindowSize();
  useEffect(() => {
    if (width > 1024 && showNav) setShowNav(false);
  }, [showNav, width]);

  return (
    <>
      <div className="flex h-[55px] w-full items-center justify-between [&>div]:h-full gap-3 relative z-50">
        <div className="flex-1 max-w-[360px] lg:block hidden">
          <SearchHeader />
        </div>
        <div className="2xl:w-[680px] xl:w-[620px] lg:w-[550px] w-full">
          <div className="w-full h-full flex justify-between items-center gap-2">
            {Object.entries(NAV_LINK).map(([key, value]) => (
              <NavItem key={key} href={value.href} title={value.title} icon={value.icon} />
            ))}
            <NavItem
              onClick={() => {
                setShowNav(true);
              }}
              className={clsx('block lg:hidden', showNav ? 'hidden' : '')}
              href={'#'}
              title={'Open Nav'}
              icon={<NavBarIcon />}
            />
            <NavItem
              onClick={() => {
                setShowNav(false);
              }}
              className={clsx('block lg:hidden', showNav ? '' : 'hidden')}
              href={'#'}
              title={'Close Nav'}
              icon={<XMarkIcon className="scale-90" />}
            />
          </div>
        </div>
        <div className="flex-1 max-w-[360px] h-full lg:block hidden">
          <AuthHeader />
        </div>
      </div>
      <div
        ref={NavRef}
        className={clsx(
          'fixed top-[56px] bottom-0 w-96 max-[500px]:w-full bg-white dark:bg-bgContentDark right-0 z-0 shadow-md dark:border-r dark:border-white/10',
          'transition-all duration-300 ease-in-out',
          showNav ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <NavHeader></NavHeader>
      </div>
    </>
  );
};

export default Header;

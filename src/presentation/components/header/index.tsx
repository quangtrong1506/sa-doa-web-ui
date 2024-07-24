'use client';
import { NAV_LINK } from '@/presentation/constants/jsx-constants';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useClickAway, useWindowSize } from 'react-use';
import NavBarIcon from '../icons/nav-bar.icon';
import SearchIcon from '../icons/search.icon';
import XMarkIcon from '../icons/xmark.icon';
import NavItem from '../reuse/nav/nav-item';
import AuthHeader from './auth.header';
import BigSearchHeader from './big-search.header';
import NavHeader from './nav.header';
import SearchHeader from './search.header';

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [isShowSearchInput, setIsShowSearchInput] = useState<boolean>(false);
  const NavRef = useRef<HTMLDivElement>(null);
  const SearchRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  useClickAway(NavRef, () => setShowNav(false));
  useClickAway(SearchRef, () => setIsShowSearchInput(false));
  let { width } = useWindowSize();
  const pathname = usePathname();
  useEffect(() => {
    if (width > 1024 && showNav) setShowNav(false);
  }, [showNav, width]);
  useEffect(() => {
    setShowNav(false);
  }, [pathname]);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <>
      <div className="flex h-[55px] w-full items-center justify-between [&>div]:h-full gap-3 relative z-50">
        <div className="flex-1 max-w-[360px] lg:block hidden">
          <SearchHeader />
        </div>
        <div
          className={clsx(
            '2xl:w-[680px] xl:w-[620px] lg:w-[550px] w-full ',
            isShowSearchInput ? 'hidden' : '',
          )}
        >
          <div className="w-full h-full flex justify-between items-center gap-2">
            {Object.entries(NAV_LINK).map(([key, value]) => (
              <NavItem
                key={key}
                href={value.href}
                title={value.title}
                className={value.href === '/saved' ? 'lg:flex hidden' : ''}
                icon={value.icon}
              />
            ))}
            <div className="flex-1 h-full mt-2 lg:hidden" ref={NavRef}>
              <NavItem
                onClick={() => {
                  setIsShowSearchInput(true);
                  setTimeout(() => {
                    document.getElementById('big-search-input')?.focus();
                  }, 100);
                }}
                className={''}
                href={'#'}
                title={'Tìm kiếm'}
                icon={<SearchIcon />}
              />

              <div
                className={clsx(
                  'fixed top-[56px] bottom-0 w-96 max-[500px]:w-full bg-white dark:bg-bgContent_d right-0 z-0 shadow-md dark:border-r dark:border-white/10',
                  'transition-all duration-300 ease-in-out',
                  showNav ? 'translate-x-0' : 'translate-x-full',
                )}
              >
                <NavHeader></NavHeader>
              </div>
            </div>
            <div className="flex-1 h-full mt-2 lg:hidden" ref={NavRef}>
              <NavItem
                onClick={() => {
                  setShowNav(true);
                }}
                className={clsx('block lg:hidden', showNav ? 'hidden' : '')}
                href={'#'}
                title={'Mở menu'}
                icon={<NavBarIcon />}
              />
              <NavItem
                onClick={() => {
                  setShowNav(false);
                }}
                className={clsx('block lg:hidden', showNav ? '' : 'hidden')}
                href={'#'}
                title={'Đóng menu'}
                icon={<XMarkIcon className="scale-90" />}
              />
              <div
                className={clsx(
                  'fixed top-[55px] bottom-0 w-96 max-[500px]:w-full bg-white dark:bg-bgContent_d right-0 z-0 shadow-md dark:border-r dark:border-white/10',
                  'transition-all duration-300 ease-in-out',
                  showNav ? 'translate-x-0' : 'translate-x-full',
                )}
              >
                <NavHeader></NavHeader>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-[360px] h-full lg:block hidden">
          <AuthHeader />
        </div>
        <div
          className={clsx('flex-1 h-full lg:hidden', isShowSearchInput ? '' : 'hidden')}
          ref={SearchRef}
        >
          <BigSearchHeader
            closeEvent={() => {
              setIsShowSearchInput(false);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

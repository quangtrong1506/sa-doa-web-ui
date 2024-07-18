'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import Tooltip from '../reuse/tooltip';
import ThemeSwitch from '../theme-mode/theme-switch';
import NavHeader from './nav.header';

const AuthHeader = () => {
  const [isShowNav, setIsShowNav] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const NavRef = useRef<HTMLDivElement>(null);
  useClickAway(NavRef, () => setIsShowNav(false));
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="flex items-center justify-end gap-2 h-full">
      <ThemeSwitch />
      <div ref={NavRef}>
        <Link
          data-tooltip
          className="font-medium hover:bg-bgHover_l p-2 rounded-md relative hidden"
          href={'/login'}
        >
          Login
          <Tooltip anchor="left">Đăng nhập tài khoản của bạn</Tooltip>
        </Link>
        <div data-tooltip className="w-9 h-9 flex justify-center items-center relative">
          <div
            className="w-full h-full flex justify-center items-center rounded-full border dark:border-white/10 dark:bg-bgHover_d cursor-pointer overflow-hidden"
            onClick={() => {
              setIsShowNav(!isShowNav);
            }}
          >
            <Image
              className="w-full h-full object-contain"
              width={55}
              height={55}
              src={'/images/logo.png'}
              alt="logo"
            />
          </div>
          <Tooltip anchor="left">Thông tin tài khoản</Tooltip>
        </div>
        <div
          className={clsx(
            'absolute w-[400px] min-h-[200px] top-[70px] right-0 bg-white rounded-lg dark:bg-bgContentDark border border-transparent dark:border-white/10 overflow-hidden',
            isShowNav ? 'block' : 'hidden',
          )}
        >
          <NavHeader />
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;

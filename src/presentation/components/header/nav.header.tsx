'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavOpenDown from '../reuse/nav/nav-open-down';
import { BuildConfig } from '@/config/config';
import { Theme } from '@/data/datasource/model/Theme';

import {
  AdminPageIcon,
  CheckIcon,
  LogoutIcon,
  MoonIcon,
  SavedIcon,
  VideoUserIcon,
} from '@/presentation/components/icons';
import { useAppSelector } from '@/data/datasource/redux/store';
import { Role } from '@/data/datasource/model';
import { Routes } from '@/presentation/constants/Routes';


const NavHeader = () => {
  const userReducer = useAppSelector((state) => state.userReducer);
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);


  useEffect(() => {
    console.log("userReducer.user", userReducer.user);
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const listThemeMode = [
    <span
      key={0}
      onClick={() => {
        setTheme(Theme.Light);
      }}
      className=" cursor-pointer rounded-md flex gap-3 justify-start items-center w-full h-full transition-none duration-0"
    >
      <div className={'w-4 h-4'}>
        <CheckIcon width={16} height={16} className={theme == 'light' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">
        Chế độ sáng
      </span>
    </span>,
    <span
      key={1}
      className=" cursor-pointer rounded-md flex gap-3 justify-start items-center w-full h-full transition-none duration-0"
      onClick={() => {
        setTheme(Theme.Dark);
      }}
    >
      <div className={'w-4 h-4'}>
        <CheckIcon width={16} height={16} className={theme == 'dark' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">Chế độ tối</span>
    </span>,
    <span
      key={2}
      className=" cursor-pointer rounded-md flex gap-3 justify-start items-center w-full h-full transition-none duration-0"
      onClick={() => {
        setTheme(Theme.System);
      }}
    >
      <div className={'w-4 h-4'}>
        <CheckIcon width={16} height={16} className={theme == 'system' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">Hệ thống</span>
    </span>,
  ];

  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-white dark:bg-bgContent_d ">
      <div className="flex items-center p-6 max-[480px]:px-2">
        <div className="h-full w-full flex justify-between items-center flex-wrap gap-3">
          <div
            className={clsx(!userReducer.isLoading || !userReducer.user ? 'hidden' : 'flex')}
          >
            <div className="w-12 h-12 overflow-hidden rounded-full border border-main/10">
              <Image
                width={60}
                height={60}
                className="w-full h-full object-contain"
                src={userReducer.user?.avatar || BuildConfig.DEFAULT_USER_AVATAR}
                alt="Logo"
              />
            </div>
            <div className="ms-3 flex flex-col">
                     <span className="text-main text-lg font-bold line-clamp-1">
                        {userReducer.user?.name || Role.User}
                     </span>
              <span className="italic text-sm text-black dark:text-white">
                        {userReducer.user?.role || Role.User}
                     </span>
            </div>
          </div>

          <div
            className={clsx(
              'w-full justify-center mb-2',
              userReducer.isLoading || !userReducer.user ? 'flex' : 'hidden',
            )}
          >
            <Link className="px-5 py-2 bg-main text-white rounded-md" href={'/login'}>
              Đăng nhập
            </Link>
          </div>

          <div className="border-b w-full dark:border-white/10"></div>
          <Link
            href={Routes.User}
            className={clsx(
              'gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full',
              userReducer.isLoading || !userReducer.user ? 'hidden' : 'flex',
            )}
          >
                  <span className="w-6 h-6 inline-block">
                     <VideoUserIcon width={24} height={24} />
                  </span>
            <span className="font-medium text-black dark:text-white">
                     Xem tất cả trang cá nhân
                  </span>
          </Link>
          <button className="p-3 dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full">
            <NavOpenDown
              items={listThemeMode}
              label="Chế độ tối"
              icon={<MoonIcon width={24} height={24} />}
            />
          </button>
          <Link
            href={Routes.Saved}
            className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
          >
                  <span className="w-6 h-6 inline-block">
                     <SavedIcon width={24} height={24} />
                  </span>
            <span className="font-medium text-black dark:text-white">Nội dung đã lưu</span>
          </Link>
          <Link
            href={Routes.Admin}
            className={clsx(
              'flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full',
              userReducer.isLoading ||
              !userReducer.user ||
              (userReducer.user && userReducer.user?.role === Role.Admin)
                ? 'hidden'
                : 'flex',
            )}
          >
                  <span className="w-6 h-6 inline-block">
                     <AdminPageIcon width={24} height={24} />
                  </span>
            <span className="font-medium text-black dark:text-white">Admin page</span>
          </Link>

          <button
            className={clsx(
              'flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full',
              userReducer.isLoading || !userReducer.user ? 'hidden' : 'flex',
            )}
          >
                  <span className="w-6 h-6 inline-block">
                     <LogoutIcon />
                  </span>
            <span className="font-medium text-black dark:text-white">Đăng xuất</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;

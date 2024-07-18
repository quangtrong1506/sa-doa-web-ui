'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AdminPage from '../icons/admin-page.icon';
import CheckIcon from '../icons/check.icon';
import LogoutIcon from '../icons/logout.ion';
import MoonIcon from '../icons/moon.icon';
import SavedIcon from '../icons/saved.icon';
import VideoUserIcon from '../icons/view-user.icon';
import NavOpenDown from '../reuse/nav/nav-open-down';

const NavHeader = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const listThemeMode = [
    <span
      key={0}
      onClick={() => {
        setTheme('light');
      }}
      className=" cursor-pointer rounded-md flex gap-3 justify-start items-center w-full h-full transition-none duration-0"
    >
      <div className={'w-4 h-4'}>
        <CheckIcon className={theme == 'light' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">
        Chế độ sáng
      </span>
    </span>,
    <span
      key={1}
      className=" cursor-pointer rounded-md flex gap-3 justify-start items-center w-full h-full transition-none duration-0"
      onClick={() => {
        setTheme('dark');
      }}
    >
      <div className={'w-4 h-4'}>
        <CheckIcon className={theme == 'dark' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">Chế độ tối</span>
    </span>,
    <span
      key={2}
      className=" cursor-pointer rounded-md flex gap-3 justify-start items-center w-full h-full transition-none duration-0"
      onClick={() => {
        setTheme('system');
      }}
    >
      <div className={'w-4 h-4'}>
        <CheckIcon className={theme == 'system' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">Hệ thống</span>
    </span>,
  ];
  return (
    <div className="w-full h-full overflow-x-hidden overflow-y-auto bg-white dark:bg-bgContentDark ">
      <div className="flex items-center p-6 max-[480px]:px-2">
        <div className="h-full w-full flex justify-between items-center flex-wrap gap-3">
          <div className="flex">
            <div className="w-12 h-12 overflow-hidden rounded-full border border-main/10">
              <Image
                width={60}
                height={60}
                className="w-full h-full object-contain"
                src="/images/logo.png"
                alt="Logo"
              />
            </div>
            <div className="ms-3 flex flex-col">
              <span className="text-main text-lg font-bold line-clamp-1">Quang Trong</span>
              <span className="italic text-sm text-black dark:text-white">Siêu Quản Trị Viên</span>
            </div>
          </div>
          <div className="border-b w-full dark:border-white/10"></div>
          <div className="w-full hidden">
            <Link
              className="flex items-center justify-center gap-3 p-3 bg-bgBody_l dark:bg-bgBody_d dark:hover:bg-bgHover_d cursor-pointer rounded-xl w-full "
              href={'/user/me'}
            >
              <span className="w-4 h-4 inline-block">
                <VideoUserIcon />
              </span>
              <span className="font-medium text-black dark:text-white">
                Xem tất cả trang cá nhân
              </span>
            </Link>
          </div>
          <Link
            href={'/user/me'}
            className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
          >
            <span className="w-6 h-6 inline-block">
              <VideoUserIcon />
            </span>
            <span className="font-medium text-black dark:text-white">Xem tất cả trang cá nhân</span>
          </Link>
          <button className="p-3 dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full">
            <NavOpenDown items={listThemeMode} label="Chế độ tối" icon={<MoonIcon />} />
          </button>
          <Link
            href={'/saved'}
            className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
          >
            <span className="w-6 h-6 inline-block">
              <SavedIcon />
            </span>
            <span className="font-medium text-black dark:text-white">Nội dung đã lưu</span>
          </Link>
          <Link
            href={'/admin'}
            className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
          >
            <span className="w-6 h-6 inline-block">
              <AdminPage />
            </span>
            <span className="font-medium text-black dark:text-white">Admin page</span>
          </Link>

          <button className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full">
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

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
import { BuildConfig } from '@/config/config';
import { ThemeRepository } from '@/data/datasource/local/ThemeRepository';
import { Theme } from '@/data/datasource/local/model/Theme';
import { Routes } from '@/presentation/constants/Routes';
import type { Customer } from '@/data/datasource/local/model/Customer';
import { CustomerImpl } from '@/data/datasource/local/model/Customer';
import { CustomerRepository } from '@/data/datasource/local/CustomerRepository';
import ModelIcon from '@/presentation/components/icons/model.icon';


const NavHeader = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [customer, setCustomer] = useState<Customer>();


  useEffect(() => {
    setMounted(true);
    const customer = CustomerRepository.getCustomer();
    setIsSignIn(customer !== undefined);
    if (customer !== undefined) {
      setCustomer(customer);
    } else {
      const _customer = new CustomerImpl();
      setCustomer(_customer);
    }
  }, []);

  if (!mounted) return null;
  const listThemeMode = [
    <span
      key={0}
      onClick={() => {
        setTheme(Theme.Light);
        ThemeRepository.setThemeMode(Theme.Light);
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
        setTheme(Theme.Dark);
        ThemeRepository.setThemeMode(Theme.Dark);
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
        setTheme(Theme.System);
        ThemeRepository.setThemeMode(Theme.Dark);
      }}
    >
      <div className={'w-4 h-4'}>
        <CheckIcon className={theme == 'system' ? '' : 'hidden'} />
      </div>
      <span className="ms-2 transition-none duration-0 text-black dark:text-white">Hệ thống</span>
    </span>,
  ];
  const profileElement = [
    <>
      <Link
        href={Routes.User}
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
        href={Routes.Saved}
        className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
      >
            <span className="w-6 h-6 inline-block">
              <SavedIcon />
            </span>
        <span className="font-medium text-black dark:text-white">Nội dung đã lưu</span>
      </Link>
      <Link
        href={Routes.Admin}
        className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
      >
            <span className="w-6 h-6 inline-block">
              <AdminPage />
            </span>
        <span className="font-medium text-black dark:text-white">Admin page</span>
      </Link>

      <button
        className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
        onClick={(event) => {
          setIsSignIn(false);
          const _customer = new CustomerImpl();
          setCustomer(_customer);
          CustomerRepository.deleteCustomer();
        }}
      >
            <span className="w-6 h-6 inline-block">
              <LogoutIcon />
            </span>
        <span className="font-medium text-black dark:text-white">
              Đăng xuất
            </span>
      </button>
    </>,
    <>
      <Link
        className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
        href={Routes.Signup}
      >
              <span className="w-4 h-4 inline-block">
                <LogoutIcon />
              </span>
        <span className="font-medium text-black dark:text-white">
                Đăng ký
              </span>
      </Link>
      <Link
        className="flex gap-7 p-3 items-center cursor-pointer dark:hover:bg-bgHover_d hover:bg-bgBody_l rounded-xl w-full"
        href={Routes.Login}
      >
              <span className="w-4 h-4 inline-block">
                <ModelIcon />
              </span>
        <span className="font-medium text-black dark:text-white">
                Đăng nhập
              </span>
      </Link>
    </>,
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
                src={BuildConfig.LOGO}
                alt="Logo"
              />
            </div>
            <div className="ms-3 flex flex-col">
              <span className="text-main text-lg font-bold line-clamp-1">{customer?.name}</span>
              <span className="italic text-sm text-black dark:text-white">{customer?.email}</span>
            </div>
          </div>
          <div className="border-b w-full dark:border-white/10"></div>
          {profileElement[isSignIn ? 0 : 1]}
        </div>
      </div>
    </div>
  );
};

export default NavHeader;

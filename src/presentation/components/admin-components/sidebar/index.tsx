"use client";

import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SidebarItem from '@/presentation/components/admin-components/sidebar/SidebarItem';
import { BuildConfig } from '@/config/config';
import { Routes } from '@/presentation/constants/Routes';
import {
  ArrowLeftLongIcon,
  CalendarIcon,
  ChartIcon,
  DashboardIcon,
  FormIcon,
  LogoutIcon,
  ProfileIcon,
  SettingIcon,
  TableIcon,
  UiElementIcon,
} from '@/presentation/components/icons';
import { useClickAway } from 'react-use';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const menuGroups = [
  {
    name: "MENU",
    menuItems: [
      {
        icon: (
          <DashboardIcon width={18} height={18} />
        ),
        label: "Dashboard",
        route: "#",
        children: [{ label: "eCommerce", route: "/" }],
      },
      {
        icon: (
          <CalendarIcon width={18} height={18}/>
        ),
        label: "Calendar",
        route: "/calendar",
      },
      {
        icon: (
          <ProfileIcon width={18} height={18}/>
        ),
        label: "Profile",
        route: Routes.Profile,
      },
      {
        icon: (
          <ProfileIcon width={18} height={18}/>
        ),
        label: "Users",
        route: Routes.Users,
      },
      {
        icon: (
          <FormIcon width={18} height={18}/>
        ),
        label: "Forms",
        route: "#",
        children: [
          { label: "Form Elements", route: "/forms/form-elements" },
          { label: "Form Layout", route: "/forms/form-layout" },
        ],
      },
      {
        icon: (
          <TableIcon width={18} height={19} />
        ),
        label: "Tables",
        route: "/tables",
      },
      {
        icon: (
          <SettingIcon width={18} height={18}/>
        ),
        label: "Settings",
        route: Routes.Settings,
      },
    ],
  },
  {
    name: "OTHERS",
    menuItems: [
      {
        icon: (
          <ChartIcon width={18} height={19}/>
        ),
        label: "Chart",
        route: "/chart",
      },
      {
        icon: (
          <UiElementIcon width={18} height={19}/>
        ),
        label: "UI Elements",
        route: "#",
        children: [
          { label: "Alerts", route: "/ui/alerts" },
          { label: "Buttons", route: "/ui/buttons" },
        ],
      },
      {
        icon: (
          <LogoutIcon width={18} height={18}/>
        ),
        label: "Authentication",
        route: "#",
        children: [
          { label: "Sign In", route: Routes.Login },
          { label: "Sign Up", route: Routes.Signup },
        ],
      },
    ],
  },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState( "dashboard");
  const rootRef = useRef<HTMLBaseElement>(null);
  useClickAway(rootRef, () => setSidebarOpen(false));
  return (

      <aside
        ref={rootRef}
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
          <Link href={Routes.Admin} className={"flex flex-row items-center"}>
            <Image
              width={64}
              height={64}
              src={BuildConfig.LOGO}
              alt="Logo"
              priority
            />
            <span className={"text-3xl pl-2"}>{BuildConfig.APP_NAME}</span>
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <ArrowLeftLongIcon width={20} height={18}/>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      pageName={pageName}
                      setPageName={setPageName}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>

  );
};

export default Sidebar;

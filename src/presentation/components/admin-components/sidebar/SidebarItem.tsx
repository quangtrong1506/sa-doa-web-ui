import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import SidebarDropdown from '@/presentation/components/admin-components/sidebar/SidebarDropdown';
import { ExpandIcon } from '@/presentation/components/icons';

const SidebarItem = ({ item, pageName, setPageName }: any) => {
  const router = useRouter();
  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : '';
    router.push(item.route)
    return setPageName(updatedPageName);
  };

  const pathname = usePathname();

  const isActive = (item: any) => {
    if (item.route === pathname) return true;
    if (item.children) {
      return item.children.some((child: any) => isActive(child));
    }
    return false;
  };

  const isItemActive = isActive(item);

  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleClick}
          className={`${isItemActive ? 'bg-graydark dark:bg-meta-4' : ''} group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4`}
        >
          {item.icon}
          {item.label}
          {item.children && (
            <ExpandIcon className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
              pageName === item.label.toLowerCase() && 'rotate-180'
            }`} width={20} height={20} />
          )}
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              pageName !== item.label.toLowerCase() && 'hidden'
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;

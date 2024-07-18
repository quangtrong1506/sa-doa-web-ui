'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Tooltip from '../tooltip';
const NavItem = ({
  href,
  icon,
  title,
  className,
  onClick,
}: {
  title: string;
  href: string;
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
}) => {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setLoading(false);
  }, []);
  useEffect(() => {
    setActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link
      data-active={active}
      data-tooltip
      className={clsx(
        'flex-1 h-[calc(100%_-_8px)] flex items-center justify-center rounded-lg relative',
        'hover:bg-bgHover_l dark:hover:bg-bgHover_d data-[active=true]:hover:bg-transparent dark:data-[active=true]:hover:bg-transparent',
        '[&_.dash-active]:data-[active=true]:block [&>svg]:data-[active=true]:fill-main',
        '[&>svg]:!w-[25px] [&>svg]:!h-[25px]',
        loading ? 'hidden' : '',
        className,
      )}
      href={href}
      onClick={(e) => {
        if (href === '#') e.preventDefault();
        onClick && onClick();
      }}
    >
      {icon}
      <div className={clsx('hidden dash-active absolute -bottom-1 w-full h-[2px] bg-main')}></div>
      <Tooltip anchor="bottom">{title}</Tooltip>
    </Link>
  );
};

export default NavItem;

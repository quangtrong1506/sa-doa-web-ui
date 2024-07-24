'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import CheckIcon from '../icons/check.icon';
import MoonIcon from '../icons/moon.icon';
import SunIcon from '../icons/sun.icon';
import Tooltip from '../reuse/tooltip';

const ThemeSwitch = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  useClickAway(rootRef, () => setFocus(false));
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div
      ref={rootRef}
      onClick={() => {
        setFocus(true);
      }}
      className="w-9 h-9 p-1 flex items-center justify-center rounded-full bg-bgHover_l dark:bg-bgHover_d relative cursor-pointer"
    >
      <div data-tooltip className={clsx('w-6 h-6 relative')}>
        {resolvedTheme === 'dark' ? (
          <SunIcon width={24} height={24} />
        ) : (
          <MoonIcon width={24} height={24} />
        )}
        <Tooltip anchor="bottom">
          {resolvedTheme === 'light' ? 'Chế độ sáng' : 'Chế độ tối'}
        </Tooltip>
      </div>
      <div
        className={clsx(
          'absolute min-w-40 top-full bg-white dark:bg-bgContent_d py-3 px-1 shadow-md rounded-md border-t border-black/5 dark:border-white/5',
          focus ? '' : 'hidden',
        )}
        onMouseLeave={() => {
          setFocus(false);
        }}
      >
        <ul className="text-left">
          <li
            onClick={() => {
              setTheme('light');
            }}
            className="py-1 px-3 cursor-pointer hover:bg-bgHover_l rounded-md flex justify-start items-center"
          >
            <div className={'w-4 h-4'}>
              <CheckIcon width={16} height={16} className={theme == 'light' ? '' : 'hidden'} />
            </div>
            <span className="ms-2">Chế độ sáng</span>
          </li>
          <li
            className="py-1 px-3 cursor-pointer hover:bg-bgHover_l rounded-md flex justify-start items-center"
            onClick={() => {
              setTheme('dark');
            }}
          >
            <div className={'w-4 h-4'}>
              <CheckIcon width={16} height={16} className={theme == 'dark' ? '' : 'hidden'} />
            </div>
            <span className="ms-2">Chế độ tối</span>
          </li>
          <li
            className="py-1 px-3 cursor-pointer hover:bg-bgHover_l rounded-md flex justify-start items-center"
            onClick={() => {
              setTheme('system');
            }}
          >
            <div className={'w-4 h-4'}>
              <CheckIcon width={16} height={16} className={theme == 'system' ? '' : 'hidden'} />
            </div>
            <span className="ms-2">Hệ thống</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ThemeSwitch;

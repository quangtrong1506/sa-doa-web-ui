import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { ArrowDownIcon } from '../../icons';

type Props = {
  itemClassName?: string;
  icon?: JSX.Element;
  iconClassName?: string;
  items: JSX.Element[];
  label: string;
} & React.HTMLProps<HTMLDivElement>;

const NavOpenDown = ({ className, itemClassName, label, icon, items, ...props }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const RootRef = useRef<HTMLDivElement>(null);
  useClickAway(RootRef, () => setShow(false));
  return (
    <div ref={RootRef} className={clsx('w-full relative', className)} {...props}>
      <div
        className="w-full justify-start gap-7 items-center flex"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className={clsx('w-6 h-6 inline-block', icon ? '' : 'hidden')}>{icon}</span>
        <span className="font-medium text-black dark:text-white">{label}</span>
      </div>
      <span className="w-5 h-5 absolute right-0 top-1" onClick={() => setShow(!show)}>
            <ArrowDownIcon
              width={20}
              height={20}
              className={clsx('transition-all duration-200 ease-in-out', show ? 'rotate-180' : '')}
            />
         </span>
      <div
        className={clsx('overflow-hidden transition-all duration-300 ease-in-out ')}
        style={{
          height: show
            ? 48 * items.length + (items.length - 1) * 8 + (items.length > 0 ? 20 : 0)
            : 0,
        }}
      >
        <ul className="flex flex-col gap-2 mt-5 transition-none duration-0">
          {items.map((item, index) => (
            <li
              className="w-full flex justify-start items-center ps-8 py-2 rounded-md h-12 dark:hover:bg-bgContent_d hover:bg-main/10 transition-none duration-0"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavOpenDown;

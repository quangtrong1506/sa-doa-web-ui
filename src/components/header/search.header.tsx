'use client';

import LOCAL, { IHistory } from '@/helpers/local.helper';
import clsx from 'clsx';
import Image from 'next/image';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import ArrowLeftLongIcon from '../icons/arrow-left-long.icon';
import XMarkIcon from '../icons/xmark.icon';
const SearchHeader = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [history, setHistory] = useState<IHistory[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const RootRef = useRef<HTMLDivElement>(null);
  useClickAway(RootRef, () => setFocus(false));
  useEffect(() => {
    setMounted(true);
    setHistory(LOCAL.getSearchHistory());
  }, []);
  const KeydownHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const keyword = e.currentTarget.value.trim();
      if (keyword) {
        LOCAL.createNewSearchHistory(keyword);
        setHistory(LOCAL.getSearchHistory());
        e.currentTarget.value = '';
      }
    }
  };
  useDebounce(
    () => {
      console.log(keyword);
    },
    500,
    [keyword],
  );
  return (
    <div
      ref={RootRef}
      className={clsx(
        'w-11/12 min-w-[300px] h-full relative -ms-6',
        focus ? 'shadow-md' : '',
        mounted ? '' : 'hidden',
      )}
    >
      <div className="absolute h-full w-full">
        <div className="flex items-center justify-between h-full w-full pe-6">
          <div className="ps-6">
            <div className="w-10 h-10 flex justify-center items-center">
              {focus ? (
                <button onClick={() => setFocus(false)} className="w-4 h-4">
                  <ArrowLeftLongIcon />
                </button>
              ) : (
                <Image
                  className="w-full h-full object-contain"
                  width={55}
                  height={55}
                  src={'/images/logo.png'}
                  alt="logo"
                ></Image>
              )}
            </div>
          </div>
          <div className="flex-1">
            <input
              className="focus:outline-none bg-bgInputLight py-2 px-3 w-full rounded-full"
              type="text"
              placeholder="Nhập từ khóa tìm kiếm"
              onFocus={() => setFocus(true)}
              value={keyword}
              onChange={(e) => setKeyword(e.currentTarget.value)}
              onKeyDown={KeydownHandle}
            />
          </div>
        </div>
        <div className={clsx('bg-white w-full pb-3 rounded-b-md', focus ? '' : 'hidden')}>
          <ul className={clsx('pt-3 mx-1', history.length > 0 ? '' : 'hidden')}>
            {history.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center hover:bg-bgHover_l p-2 ps-6 rounded-md cursor-default"
              >
                <span>{item.keyword}</span>
                <button
                  className="w-5 flex justify-center"
                  onClick={() => {
                    LOCAL.deleteSearchHistory(item.id);
                    setHistory(LOCAL.getSearchHistory());
                  }}
                >
                  <div className="w-3 h-3">
                    <XMarkIcon className="!fill-red-500" />
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div
            className={clsx(
              'p-3 mx-1 pt-6 text-center text-textDisable_l',
              history.length > 0 ? 'hidden' : '',
            )}
          >
            Không có tìm kiếm nào gần đây
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;

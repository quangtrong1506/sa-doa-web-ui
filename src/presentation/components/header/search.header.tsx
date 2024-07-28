'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useClickAway, useDebounce } from 'react-use';
import { ArrowLeftLongIcon, HistoryIcon, SearchIcon, XMarkIcon } from '../icons';
import Tooltip from '../reuse/tooltip';
import { MyHistory } from '@/data/datasource/model/MyHistory';
import { HistoryRepository } from '@/data/datasource/local/HistoryRepository';
import { BuildConfig } from '@/config/config';
import { useRouter } from 'next/navigation';
import { Routes } from '@/presentation/constants/Routes';

const SearchHeader = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [history, setHistory] = useState<MyHistory[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter();
  const RootRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);
  useClickAway(RootRef, () => closeSearchInput());
  useEffect(() => {
    setMounted(true);
    setHistory(HistoryRepository.getSearchHistory());
  }, []);
  const KeydownHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const keyword = e.currentTarget.value.trim();
      if (keyword) {
        HistoryRepository.createNewSearchHistory(keyword);
        setHistory(HistoryRepository.getSearchHistory());
        setKeyword('');
        router.push(`${Routes.Search}${keyword}`);
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
  const closeSearchInput = () => {
    setFocus(false);
    setShowInput(false);
  };
  return (
    <div
      ref={RootRef}
      className={clsx(
        'w-full h-full relative -ms-6',
        focus ? 'shadow-md dark:shadow-white/5' : '',
        mounted ? '' : 'hidden',
      )}
    >
      <div className="absolute h-full w-full">
        <div className="flex items-center justify-between h-full w-full pe-6">
          <div className="ps-6 me-1">
            <div className="w-10 h-10 flex justify-center items-center">
              {focus ? (
                <button
                  onClick={() => {
                    closeSearchInput();
                  }}
                  className="w-4 h-4"
                >
                  <ArrowLeftLongIcon />
                </button>
              ) : (
                <Image
                  className="w-full h-full object-contain"
                  width={55}
                  height={55}
                  src={BuildConfig.LOGO}
                  alt="logo"
                ></Image>
              )}
            </div>
          </div>
          <div className="flex-1">
            <input
              ref={InputRef}
              className={clsx(
                'focus:outline-none bg-bgInputLight dark:bg-bgInputDark py-2 px-3 w-full rounded-full ',
                showInput ? 'inline-block' : 'hidden xl:inline-block',
              )}
              type="text"
              placeholder="Nhập từ khóa tìm kiếm"
              onFocus={() => setFocus(true)}
              value={keyword}
              onChange={(e) => setKeyword(e.currentTarget.value)}
              onKeyDown={KeydownHandle}
            />
            <div
              className={clsx(
                'w-9 h-9  justify-center items-center relative',
                showInput ? 'hidden ' : 'flex xl:hidden',
              )}
            >
              <div
                className="w-full h-full flex justify-center items-center rounded-full bg-bgHover_l dark:bg-bgHover_d cursor-pointer overflow-hidden"
                onClick={() => {
                  setShowInput(true);
                  setTimeout(() => {
                    InputRef.current?.focus();
                  }, 100);
                }}
              >
                <div className="w-6 h-6">
                  <SearchIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'bg-white w-full pb-3 rounded-b-md dark:bg-bgContentDark',
            focus ? '' : 'hidden',
          )}
        >
          <ul className={clsx('pt-3 mx-1', history.length > 0 ? '' : 'hidden')}>
            {history.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center hover:bg-bgHover_l dark:hover:bg-bgHover_d p-2 ps-6 rounded-md cursor-default"
              >
                <span className="w-4 h-4 -mb-1">
                  <HistoryIcon />
                </span>
                <span data-tooltip className="flex-1 ms-6 relative">
                  <span className="line-clamp-1">{item.keyword}</span>
                  <Tooltip anchor="right">{item.keyword}</Tooltip>{' '}
                </span>
                <button
                  className="w-5 flex justify-center"
                  onClick={() => {
                    HistoryRepository.deleteSearchHistory(item.id);
                    setHistory(HistoryRepository.getSearchHistory());
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

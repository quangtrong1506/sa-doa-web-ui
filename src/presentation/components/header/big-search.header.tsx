'use client';
import { HistoryRepository } from '@/data/datasource/local/HistoryRepository';
import { MyHistory } from '@/data/datasource/model/MyHistory';
import clsx from 'clsx';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'react-use';
import { ArrowLeftLongIcon, HistoryIcon, XMarkIcon } from '../icons';
import Tooltip from '../reuse/tooltip';

const BigSearchHeader = ({ closeEvent }: { closeEvent: () => void }) => {
   const [history, setHistory] = useState<MyHistory[]>([]);
   const [mounted, setMounted] = useState<boolean>(false);
   const [keyword, setKeyword] = useState<string>('');
   const InputRef = useRef<HTMLInputElement>(null);
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
         className={clsx(
            'w-[calc(100%_+_8px)] h-full relative -mx-1 shadow-md dark:shadow-white/5',
            mounted ? '' : 'hidden',
         )}
      >
         <div className="absolute h-full w-full">
            <div className="flex items-center justify-between h-full w-full px-2">
               <div className="me-1">
                  <div className="w-10 h-10 flex justify-center items-center">
                     <button
                        onClick={() => {
                           closeEvent();
                        }}
                        className="w-5 h-5"
                     >
                        <ArrowLeftLongIcon width={20} height={20} />
                     </button>
                  </div>
               </div>
               <div className="flex-1">
                  <input
                     id="big-search-input"
                     ref={InputRef}
                     className={clsx(
                        'focus:outline-none bg-bgInputLight dark:bg-bgInputDark py-2 px-3 w-full rounded-full ',
                        'inline-block',
                     )}
                     type="text"
                     placeholder="Nhập từ khóa tìm kiếm"
                     value={keyword}
                     onChange={(e) => setKeyword(e.currentTarget.value)}
                     onKeyDown={KeydownHandle}
                     autoFocus
                  />
               </div>
            </div>
            <div className={clsx('bg-white w-full pb-3 rounded-b-md dark:bg-bgContentDark')}>
               <ul className={clsx('pt-3 mx-1', history.length > 0 ? '' : 'hidden')}>
                  {history.map((item) => (
                     <li
                        key={item.id}
                        className="flex justify-between items-center hover:bg-bgHover_l dark:hover:bg-bgHover_d p-2 ps-4 rounded-md cursor-default"
                     >
                        <span className="w-4 h-4 -mb-1">
                           <HistoryIcon width={14} height={14} />
                        </span>
                        <span data-tooltip className="flex-1 ms-6 relative">
                           <span className="line-clamp-1">{item.keyword}</span>
                           <Tooltip anchor="bottom">{item.keyword}</Tooltip>{' '}
                        </span>
                        <button
                           className="w-5 flex justify-center"
                           onClick={() => {
                              HistoryRepository.deleteSearchHistory(item.id);
                              setHistory(HistoryRepository.getSearchHistory());
                           }}
                        >
                           <div className="w-3 h-3">
                              <XMarkIcon width={10} height={10} className="!fill-red-500" />
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

export default BigSearchHeader;

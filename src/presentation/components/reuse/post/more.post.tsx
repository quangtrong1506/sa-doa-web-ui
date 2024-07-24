'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import DeleteIcon from '../../icons/delete.icon';
import MoreIcon from '../../icons/more.icon';
import PenEditIcon from '../../icons/pen-edit.icon';
import ReportIcon from '../../icons/report.icon';
import SavedIcon from '../../icons/saved.icon';

interface IMorePostProps {
  className?: string;
  user?: any;
  post?: any;
}

const MorePostComponent = ({ className, user, post }: IMorePostProps) => {
  const [isShowUI, setIsShowUI] = useState(false);
  const RootRef = useRef<HTMLDivElement>(null);
  useClickAway(RootRef, () => {
    setIsShowUI(false);
  });
  return (
    <div ref={RootRef} className={clsx('relative', className)}>
      <button
        className="p-2 overflow-hidden rounded-full hover:bg-bgHover_l dark:hover:bg-bgHover_d"
        onClick={() => {
          setIsShowUI(!isShowUI);
        }}
      >
        <div className="w-4 h-4">
          <MoreIcon />
        </div>
      </button>
      <div
        className={clsx(
          'absolute z-10 top-full min-w-[150px] min-h-9 rounded-lg bg-white dark:bg-bgContent_d shadow-lg',
          'right-0 border border-black/5 dark:border-white/5',
          isShowUI ? 'block' : 'hidden',
        )}
      >
        <ul className="p-2 flex flex-col gap-1">
          <li className="text-[12px] hover:bg-bgHover_l dark:hover:bg-bgHover_d rounded px-2 py-1 cursor-pointer">
            <Link className="flex items-center" href={'/admin/posts/aaaa'}>
              <span className="inline-block w-3 h-3 mr-2">
                <PenEditIcon />
              </span>
              Chỉnh sửa bài viết
            </Link>
          </li>
          <li className="text-[12px] hover:bg-bgHover_l dark:hover:bg-bgHover_d rounded px-2 py-1 cursor-pointer">
            <button className="flex items-center">
              <span className="inline-block w-3 mr-2">
                <SavedIcon />
              </span>
              Lưu bài viết
            </button>
          </li>
          <li className="text-[12px] hover:bg-bgHover_l dark:hover:bg-bgHover_d rounded px-2 py-1 cursor-pointer">
            <button className="flex items-center">
              <span className="inline-block w-3 mr-2">
                <DeleteIcon />
              </span>
              Xoá bài viết
            </button>
          </li>
          <li className="text-[12px] hover:bg-bgHover_l dark:hover:bg-bgHover_d rounded px-2 py-1 cursor-pointer">
            <button className="flex items-center">
              <span className="inline-block w-3 mr-2">
                <ReportIcon />
              </span>
              Báo cáo bài viết
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MorePostComponent;

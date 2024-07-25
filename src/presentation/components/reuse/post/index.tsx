import { BuildConfig } from '@/config/config';
import { POST_IMAGES } from '@/data/datasource/constants/sample.constant';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import GridImage from '../image/grid.image';
import MorePostComponent from './more.post';
import { IPost } from './post';

interface IPostItemProps {
  className: string;
  post?: IPost;
}

const PostItem = ({ className, post }: IPostItemProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    if (!post) setIsLoading(true);
  }, [post]);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div
      className={clsx(
        'w-full bg-white rounded-lg shadow-sm dark:bg-bgContent_d p-6',
        className,
        isLoading ? 'select-none' : '',
      )}
    >
      <div className="flex">
        <div
          className={clsx(
            'w-10 h-10 rounded-full overflow-hidden flex justify-center items-center mr-2 border border-bgBody_l dark:border-white/15',
            isLoading ? 'bg-bgPulse_l dark:bg-bgPulse_d animate-pulse' : '',
          )}
        >
          <Image
            className={clsx('w-full h-full object-cover', isLoading ? 'hidden' : '')}
            width={50}
            height={50}
            src={post?.author?.avatar || BuildConfig.DEFAULT_USER_AVATAR}
            alt={post?.author?.avatar || BuildConfig.DEFAULT_USER_AVATAR}
          />
        </div>
        <div className="flex-1">
          <div className="w-full -mt-1 flex flex-col">
            <span
              className={clsx(
                isLoading
                  ? 'inline-block w-40 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg'
                  : '',
              )}
            >
              <Link
                className={clsx(
                  'font-semibold hover:underline text-textLink_l dark:text-textLink_d ',
                  isLoading ? 'hidden' : '',
                )}
                href={'/users/' + post?.author?.id}
              >
                {post?.author?.name || BuildConfig.DEFAULT_USER_NAME}
              </Link>
              <span className={clsx('font-semibold text-transparent ', isLoading ? '' : 'hidden')}>
                -
              </span>
            </span>
            <span
              className={clsx(
                ' inline-block text-[12px]  rounded-lg',
                isLoading
                  ? 'text-transparent bg-bgPulse_l dark:bg-bgPulse_d animate-pulse w-12 mt-1 h-3'
                  : 'w-full text-textDisable_l dark:text-textDisable_d',
              )}
            >
              spa
            </span>
          </div>
        </div>
        <div className={clsx(isLoading ? 'hidden' : '')}>
          <MorePostComponent />
        </div>
      </div>
      <div className="h-[1px] w-full border-b border-bgHover_l dark:border-bgHover_d/5 mt-2 mb-3 hidden"></div>
      <div className="mt-3 flex flex-col gap-2">
        <div className="w-3/5 h-4 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
        <div className="flex gap-2">
          <div className="w-1/5 h-4 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
          <div className="w-2/3 h-4 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
        </div>
        <div className="w-2/5 h-4 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
        <div className="flex gap-2">
          <div className="w-1/3 aspect-square bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
          <div className="w-1/3 aspect-square bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
        </div>
      </div>
      <div className={clsx('mt-3', isLoading ? 'hidden' : '')}>
        <div
          className="text-base xl:text-lg"
          dangerouslySetInnerHTML={{
            __html: post?.content || '',
          }}
        ></div>
        <div className="text-sm xl:text-base">
          <div className={post?.cosplayer ? '' : 'hidden'}>
            <span className="font-semibold">Cosplayer: </span>
            <Link className="text-textLink_l hover:underline" href={'/models/id'}>
              Rinaijiao-(日奈娇)
            </Link>
          </div>
          <div className={post?.character ? '' : 'hidden'}>
            <span className="font-semibold">Character: </span>Umi-kun Girl
          </div>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <span
                className="text-sm text-textLinkBlue_l dark:text-textLinkBlue_d hover:underline cursor-pointer"
                key={'tag-' + index}
              >
                #tag{index}
              </span>
            ))}
          </div>
          <div className="mt-2">
            <GridImage post={post} images={POST_IMAGES}></GridImage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

import { BuildConfig } from '@/config/config';
import { POST_IMAGES } from '@/data/datasource/constants/sample.constant';
import TimerHandler from '@/helpers/time.helper';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import GridImage from '../image/grid.image';
import MorePostComponent from './more.post';

interface IPostItemProps {
  className: string;
  item: any;
}

const PostItem = ({ className }: IPostItemProps) => {
  return (
    <div
      className={clsx('w-full bg-white rounded-lg shadow-sm dark:bg-bgContent_d p-6', className)}
    >
      <div className="flex">
        <div className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center mr-2 border border-bgBody_l dark:border-white/15">
          <Image
            className="w-full h-full object-cover"
            width={50}
            height={50}
            src={BuildConfig.DEFAULT_USER_AVATAR}
            alt="..."
          />
        </div>
        <div className="flex-1">
          <div className="w-full -mt-1 flex flex-col">
            <span>
              <Link
                className="font-semibold hover:underline text-textLink_l dark:text-textLink_d"
                href={'/user/1'}
              >
                Trọng Sa Đoạ
              </Link>
            </span>
            <span className="w-full inline-block text-[12px] text-textDisable_l dark:text-textDisable_d">
              {TimerHandler.getTimeAgo('2024-06-11')}
            </span>
          </div>
        </div>
        <div>
          <MorePostComponent />
        </div>
      </div>
      <div className="h-[1px] w-full border-b border-bgHover_l dark:border-bgHover_d/5 mt-2 mb-3 hidden"></div>
      <div className="mt-3">
        <div
          dangerouslySetInnerHTML={{
            __html: 'Hôm qua tớ đi sự kiện nè',
          }}
        ></div>
        <div className="text-sm">
          <div>
            <span className="font-semibold">Cosplayer: </span>
            <Link className="text-textLink_l hover:underline" href={'/models/id'}>
              Rinaijiao-(日奈娇)
            </Link>
          </div>
          <div>
            <span className="font-semibold">Character: </span>: Umi-kun Girl
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
            <GridImage id="id" images={POST_IMAGES}></GridImage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

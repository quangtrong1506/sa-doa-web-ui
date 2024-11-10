'use client';
import { BuildConfig } from '@/config/config';
import { AlignLeftIcon } from '@/presentation/components/icons';
import SliderImages from '@/presentation/components/reuse/image/slider.images';
import MorePostComponent from '@/presentation/components/reuse/post/more.post';
import Tooltip from '@/presentation/components/reuse/tooltip';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/data/datasource/redux/store';
import { Post } from '@/data/datasource/model/Post';
import { resetUrlBack } from '@/data/datasource/redux/features/url';
import { resetPost } from '@/data/datasource/redux/features/post';
import { getTimeAgo } from '@/presentation/helper';

const PostDetail = () => {
   const dispatch = useDispatch();
   const router = useRouter();
   const params = useParams();
   const searchParams = useSearchParams();
   const id = params.id;

   //
   const urlReducer = useAppSelector((state) => state.urlReducer);
   const postReducer = useAppSelector((state) => state.postReducer);
   //
   const [mounted, setMounted] = useState(false);
   const [post, setPost] = useState<Post | undefined>();
   const [isViewVertically, setIsViewVertically] = useState<boolean>(false);
   const [isViewAsSlider, setIsViewAsSlider] = useState<boolean>(false);
   const [sliderIndex, setSliderIndex] = useState<number>(0);

   const handleCloseClick = () => {
      if (urlReducer.url) router.back();
      else router.push('/', { scroll: false });
      dispatch(resetUrlBack());
      dispatch(resetPost());
   };
   const handleViewClick = () => {
      setIsViewVertically((prev) => !prev);
      if (!isViewVertically)
         router.replace(location.pathname + '#image-' + (searchParams.get('p') || 0));
      else router.replace(location.pathname + '?p=0');
   };
   const handleImageClick = (index: number) => {
      const url = (window.location.pathname || '/') + (window.location.search || '');
      router.push(`/posts/${post?.id || 'dev'}?p=${index}`);
      setSliderIndex(index);
      setIsViewAsSlider(true);
   };
   useEffect(() => {
      if (!postReducer.isLoading && postReducer.post) setPost(postReducer.post);
   }, [postReducer]);
   useEffect(() => {
      setMounted(true);
   }, []);
   console.log(post);

   if (!mounted) return null;
   return (
      <div className={clsx('w-full h-[calc(100vh_-_55px)] flex flex-wrap')}>
         {!isViewVertically && (
            <div
               className={clsx(
                  'transition-all ease-in-out duration-200',
                  'relative w-full lg:w-2/3 lg:h-full aspect-video',
                  !post ? 'select-none' : '',
               )}
            >
               <SliderImages images={post?.images} onClose={handleCloseClick} />
            </div>
         )}
         <div
            className={clsx(
               'w-full bg-white dark:bg-bgContent_d flex flex-col py-3 px-6',
               isViewVertically
                  ? '2xl:w-[680px] xl:w-[620px] lg:w-[550px] w-full mx-auto my-3 rounded-lg'
                  : 'lg:w-1/3',
            )}
         >
            <div className="flex w-full mt-2">
               <div
                  className={clsx(
                     'w-12 h-12 rounded-full overflow-hidden flex justify-center items-center mr-2 border border-bgBody_l dark:border-white/15',
                     !post
                        ? 'bg-bgPulse_l dark:bg-bgPulse_d animate-pulse !border-transparent'
                        : '',
                  )}
               >
                  <Image
                     className={clsx('w-full h-full object-cover', !post ? 'hidden' : '')}
                     width={80}
                     height={80}
                     src={post?.author?.avatar || BuildConfig.DEFAULT_USER_AVATAR}
                     alt={post?.author?.avatar || BuildConfig.DEFAULT_USER_AVATAR}
                  />
               </div>
               <div className="flex-1">
                  <div className="w-full -mt-1 flex flex-col">
                     <span
                        className={clsx(
                           post
                              ? ''
                              : 'inline-block w-40 h-4 mb-1 mt-2 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg',
                        )}
                     >
                        <Link
                           className={clsx(
                              'font-semibold hover:underline text-textLink_l dark:text-textLink_d text-lg',
                              post ? '' : 'hidden',
                           )}
                           href={'/users/' + post?.author?._id}
                        >
                           {post?.author?.username || ''}
                        </Link>
                     </span>
                     <span
                        className={clsx(
                           ' inline-block text-[12px]  rounded-lg',
                           post
                              ? 'w-full text-textDisable_l dark:text-textDisable_d'
                              : 'text-transparent bg-bgPulse_l dark:bg-bgPulse_d animate-pulse w-12 mt-1 h-3',
                        )}
                     >
                        {post ? getTimeAgo(post?.created_ad || post?.created_ad) : ''}
                     </span>
                  </div>
               </div>
               <div className={clsx('flex items-center gap-2', post ? '' : 'hidden')}>
                  <button
                     className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-bgHover_l dark:hover:bg-bgHover_d relative"
                     data-tooltip
                     onClick={() => {
                        handleViewClick();
                     }}
                  >
                     <AlignLeftIcon
                        className={clsx(
                           'transition-all duration-150 ease-linear',
                           isViewVertically ? 'rotate-90' : '-rotate-90',
                        )}
                     />
                     <Tooltip anchor="bottom">
                        {!isViewVertically ? 'Xem theo chiều dọc' : 'Xem theo slider'}
                     </Tooltip>
                  </button>
                  <MorePostComponent />
               </div>
            </div>
            <div className={clsx('mt-3', post ? '' : 'hidden')}>
               <div
                  className="text-base xl:text-lg"
                  dangerouslySetInnerHTML={{
                     __html: post?.content || '',
                  }}
               ></div>
               <div className="text-sm xl:text-base">
                  <div className={post?.cosplayer ? '' : 'hidden'}>
                     <span className="font-semibold">Cosplayer: </span>
                     <Link
                        className="text-textLink_l hover:underline"
                        href={'/cosplayer/' + post?.cosplayer?.id}
                     >
                        {post?.cosplayer?.name}
                     </Link>
                  </div>
                  <div className={post?.character ? '' : 'hidden'}>
                     <span className="font-semibold">Character: </span>
                     {post?.character}
                  </div>
                  <div className="flex flex-wrap gap-1">
                     {post?.tags?.map((tag, index) => (
                        <span
                           className="text-sm text-textLinkBlue_l dark:text-textLinkBlue_d hover:underline cursor-pointer"
                           key={'tag-' + index}
                        >
                           #{tag}
                        </span>
                     ))}
                  </div>
               </div>
            </div>
            {isViewVertically && (
               <>
                  <div className="w-full flex flex-col mt-5 gap-1">
                     {post?.images?.map((image, index) => (
                        <Image
                           id={'image-' + index}
                           className="w-full object-contain"
                           key={image}
                           width={0}
                           height={0}
                           sizes="100vw"
                           src={image}
                           alt={image}
                           onClick={() => {
                              handleImageClick(index);
                           }}
                        />
                     ))}
                  </div>
                  {isViewAsSlider && (
                     <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-[99]">
                        <SliderImages
                           images={post?.images}
                           onClose={() => {
                              setIsViewAsSlider(false);
                           }}
                           defaultIndex={sliderIndex}
                        />
                     </div>
                  )}
               </>
            )}
            {!post && (
               <div className="w-full flex flex-col mt-5 gap-1">
                  <div className="w-3/5 h-3 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
                  <div className="w-full flex gap-2">
                     <div className="w-2/5 h-3 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
                     <div className="w-1/3 h-3 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
                  </div>
                  <div className="w-1/5 h-3 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg"></div>
               </div>
            )}
         </div>
      </div>
   );
};

export default PostDetail;

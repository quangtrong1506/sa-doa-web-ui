'use client';
import { BuildConfig } from '@/config/config';
import { POST_IMAGES } from '@/data/datasource/constants/sample.constant';
import { getTimeAgo } from '@/helpers/time.helper';
import ArrowNextIcon from '@/presentation/components/icons/arrow-next.icon';
import ArrowPrevIcon from '@/presentation/components/icons/arrow-prev.icon';
import ExitFullScreenIcon from '@/presentation/components/icons/exit-full-screen.icon';
import XMarkIcon from '@/presentation/components/icons/xmark.icon';
import ZoomFullScreenIcon from '@/presentation/components/icons/zoom-full-screen.icon';
import MorePostComponent from '@/presentation/components/reuse/post/more.post';
import { IPost } from '@/presentation/components/reuse/post/post';
import { resetUrlBack } from '@/redux/features/url';
import { useAppSelector } from '@/redux/store';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Zoom } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const PostDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const photo = searchParams.get('p');
  const urlReducer = useAppSelector((state) => state.urlReducer);
  const postReducer = useAppSelector((state) => state.postReducer);
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [post, setPost] = useState<IPost | undefined>({
    id: '0012',
    title: 'Những gia đình theo công thức 4-2-1...',
    description: 'Post Description',
    content:
      'Những gia đình theo công thức 4-2-1 đang ngày càng phổ biến. Trong vài chục năm tới, khi ông bà, cha mẹ già đi thì những đứa trẻ hôm nay sẽ phải một mình mang trọng trách chăm sóc 6 người: ông bà hai bên và cha mẹ. Áp lực sẽ không chỉ là kinh tế, mà còn là tất cả mọi thứ liên quan đến chất lượng cuộc sống.',
    images: POST_IMAGES,
    author: {
      id: 'user_id',
      name: 'John Doe',
      avatar: BuildConfig.DEFAULT_USER_AVATAR,
      email: 'user@example.com',
      password: '',
      role: 'user',
    },
    created_ad: new Date().toISOString(),
    updated_ad: new Date().toISOString(),
  });
  const SwiperRef = useRef<SwiperRef | null>(null);
  const id = params.id;
  const handleNextClick = () => {
    if (SwiperRef.current) SwiperRef.current.swiper.slideNext();
  };
  const handlePrevClick = () => {
    if (SwiperRef.current) SwiperRef.current.swiper.slidePrev();
  };
  const handleCloseClick = () => {
    if (urlReducer.url?.back) router.back();
    else router.push('/', { scroll: false });
    dispatch(resetUrlBack());
  };
  // useEffect(() => {
  //   if (!postReducer.isLoading && postReducer.post) setPost(postReducer.post);
  // }, [postReducer]);
  useEffect(() => {
    setMounted(true);
  }, []);
  console.log(postReducer);
  console.log(post);

  if (!mounted) return null;
  return (
    <div className={clsx('w-full h-[calc(100vh_-_55px)] flex', isLoading ? 'hidden' : 'flex')}>
      <div
        className={clsx(
          'transition-all ease-in-out duration-200',
          isFullScreen ? 'fixed top-0 left-0 bottom-0 right-0 z-[101]' : 'relative w-2/3 h-full',
        )}
      >
        <div className="w-full h-full bg-black relative">
          <Swiper
            ref={SwiperRef}
            className="w-full h-full"
            spaceBetween={2}
            centeredSlides={true}
            slidesPerView={1}
            zoom={{ minRatio: 1, maxRatio: 5, toggle: true }}
            modules={[Zoom]}
            onSlideChange={(swiper) => {
              console.log(swiper.activeIndex);
              router.replace(window.location.href.replace(/(p=\d+)/g, 'p=' + swiper.activeIndex));
            }}
            onSwiper={(swiper) => {
              // if (photo) swiper.slideTo(parseInt(photo));
              setIsLoading(false);
            }}
          >
            {post?.images?.map((image) => (
              <SwiperSlide key={image}>
                <div className="swiper-zoom-container">
                  <Image
                    className="h-full object-contain object-center"
                    width={1920}
                    height={1920}
                    src={image}
                    alt={image}
                  ></Image>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center bg-white/50 hover:bg-white  left-3"
          >
            <ArrowPrevIcon width={40} height={40} className="dark:!fill-black" />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center bg-white/50 hover:bg-white  right-3"
          >
            <ArrowNextIcon width={40} height={40} className="dark:!fill-black" />
          </button>
          <button
            onClick={handleCloseClick}
            className="absolute top-3 left-3 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center hover:bg-white/20"
          >
            <XMarkIcon width={40} height={40} className="fill-white" />
          </button>
          <button
            onClick={() => {
              setIsFullScreen((prev) => !prev);
            }}
            className="absolute top-3 right-3 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center hover:bg-white/20"
          >
            {isFullScreen ? (
              <ZoomFullScreenIcon className="fill-white !w-7 !h-7" />
            ) : (
              <ExitFullScreenIcon className="fill-white !w-7 !h-7" />
            )}
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-white dark:bg-bgContent_d flex flex-col py-3 px-6">
        <div className="flex w-full mt-2">
          <div
            className={clsx(
              'w-12 h-12 rounded-full overflow-hidden flex justify-center items-center mr-2 border border-bgBody_l dark:border-white/15',
              isLoading ? 'bg-bgPulse_l dark:bg-bgPulse_d animate-pulse' : '',
            )}
          >
            <Image
              className={clsx('w-full h-full object-cover', isLoading ? 'hidden' : '')}
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
                  isLoading
                    ? 'inline-block w-40 bg-bgPulse_l dark:bg-bgPulse_d animate-pulse rounded-lg'
                    : '',
                )}
              >
                <Link
                  className={clsx(
                    'font-semibold hover:underline text-textLink_l dark:text-textLink_d text-lg',
                    isLoading ? 'hidden' : '',
                  )}
                  href={'/users/' + post?.author?.id}
                >
                  {post?.author?.name || BuildConfig.DEFAULT_USER_NAME}
                </Link>
                <span
                  className={clsx('font-semibold text-transparent ', isLoading ? '' : 'hidden')}
                >
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
                {getTimeAgo(post?.created_ad || post?.created_ad)}
              </span>
            </div>
          </div>
          <div className={clsx(isLoading ? 'hidden' : '')}>
            <MorePostComponent />
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
              {post?.tags?.map((tag, index) => (
                <span
                  className="text-sm text-textLinkBlue_l dark:text-textLinkBlue_d hover:underline cursor-pointer"
                  key={'tag-' + index}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <button
                onClick={() => {
                  SwiperRef.current?.swiper.zoom.in(3);
                }}
              >
                Zoom
              </button>
              <button
                onClick={() => {
                  SwiperRef.current?.swiper.zoom.in(1);
                }}
              >
                Zoom
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;

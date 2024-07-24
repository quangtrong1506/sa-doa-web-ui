'use client';

import { POST_IMAGES } from '@/data/datasource/constants/sample.constant';
import ArrowNextIcon from '@/presentation/components/icons/arrow-next.icon';
import ArrowPrevIcon from '@/presentation/components/icons/arrow-prev.icon';
import ExitFullScreenIcon from '@/presentation/components/icons/exit-full-screen.icon';
import XMarkIcon from '@/presentation/components/icons/xmark.icon';
import ZoomFullScreenIcon from '@/presentation/components/icons/zoom-full-screen.icon';
import { useAppSelector } from '@/redux/store';
import { clsx } from 'clsx';
import Image from 'next/image';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Zoom } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
const PostDetail = () => {
  const urlReducer = useAppSelector((state) => state.urlReducer);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const photo = searchParams.get('p');
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
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
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className={clsx('w-full h-[calc(100vh_-_55px)]', isLoading ? 'hidden' : 'flex')}>
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
            zoom={{ minRatio: 1, maxRatio: 5 }}
            modules={[Zoom]}
            onSlideChange={(swiper) => {
              console.log(swiper.activeIndex);
              router.replace(window.location.href.replace(/(p=\d+)/g, 'p=' + swiper.activeIndex));
            }}
            onSwiper={(swiper) => {
              if (photo) swiper.slideTo(parseInt(photo));
              setIsLoading(false);
            }}
          >
            {POST_IMAGES.map((image) => (
              <SwiperSlide key={image}>
                <div className="w-full h-full flex justify-center items-center swiper-zoom-container">
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
            <ArrowPrevIcon className="dark:!fill-black" />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center bg-white/50 hover:bg-white  right-3"
          >
            <ArrowNextIcon className="dark:!fill-black" />
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
      <div className="w-1/3 bg-red-50"></div>
    </div>
  );
};

export default PostDetail;

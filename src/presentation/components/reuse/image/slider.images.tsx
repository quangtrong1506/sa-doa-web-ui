'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useFullscreen } from 'react-use';
import { Zoom } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import {
   ArrowNextIcon,
   ArrowPrevIcon,
   ExitFullScreenIcon,
   XMarkIcon,
   ZoomFullScreenIcon,
   ZoomInIcon,
   ZoomOutIcon,
} from '../../icons';

export type SliderImageProps = {
   className?: string;
   images?: string[];
   defaultIndex?: number;
   onClose?: () => void;
   onPrev?: (index: number) => void;
   onNext?: (index: number) => void;
   onZoomIn?: (scale: number) => void;
   onZoomOut?: (scale: number) => void;
   onFullScreen?: () => void;
   onExitFullScreen?: () => void;
   onChange?: (index: number) => void;
};

const ZOOM_SETTINGS = { minRatio: 1, maxRatio: 5, toggle: true };
const SliderImages = ({
   className,
   defaultIndex,
   images,
   onClose,
   onPrev,
   onNext,
   onZoomIn,
   onZoomOut,
   onFullScreen,
   onExitFullScreen,
   onChange,
}: SliderImageProps) => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const photo = defaultIndex || parseInt(searchParams.get('p') || '0');
   //State
   const [mounted, setMounted] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
   const [scale, setScale] = useState<number>(ZOOM_SETTINGS.minRatio);
   const [isShowScaleText, setIsShowScaleText] = useState<boolean>(false);
   const [isShowButton, setIsShowButton] = useState<boolean>(false);
   // Ref
   const SwiperRef = useRef<SwiperRef | null>(null);
   const RootRef = useRef<HTMLDivElement | null>(null);
   const TimeOutID = useRef<NodeJS.Timeout>();
   const ButtonTimeOutID = useRef<NodeJS.Timeout>();

   // Function
   const handleNextClick = () => {
      if (SwiperRef.current) SwiperRef.current.swiper.slideNext();
   };
   const handlePrevClick = () => {
      if (SwiperRef.current) SwiperRef.current.swiper.slidePrev();
   };

   useFullscreen(RootRef, isFullScreen, {
      onClose: () => {
         setIsFullScreen(false);
         onExitFullScreen && onExitFullScreen();
      },
   });
   const handleCloseClick = () => {
      onClose && onClose();
   };
   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null;
   return (
      <div className="w-full h-full bg-black">
         <div
            ref={RootRef}
            className={clsx(
               'w-full h-full relative',
               isLoading || !images || images?.length === 0 ? 'hidden' : '',
               isShowButton ? '' : '[&_button]:hidden',
            )}
            onMouseEnter={() => {
               if (!isShowButton) setIsShowButton(true);
               if (ButtonTimeOutID.current) clearTimeout(ButtonTimeOutID.current);
            }}
            onMouseLeave={() => {
               ButtonTimeOutID.current = setTimeout(() => {
                  setIsShowButton(false);
               }, 5000);
            }}
         >
            <Swiper
               ref={SwiperRef}
               className="w-full h-full"
               spaceBetween={2}
               centeredSlides={true}
               slidesPerView={1}
               zoom={ZOOM_SETTINGS}
               modules={[Zoom]}
               onSlideChange={(swiper) => {
                  router.replace(
                     window.location.href.replace(/(p=\d+)/g, 'p=' + swiper.activeIndex),
                  );
                  onChange && onChange(swiper.activeIndex);
               }}
               onZoomChange={(swiper, scale) => {
                  onZoomIn && onZoomIn(scale);
                  onZoomOut && onZoomOut(scale);
                  setScale(scale);
                  setIsShowScaleText(true);
                  if (TimeOutID.current) clearTimeout(TimeOutID.current);
                  TimeOutID.current = setTimeout(() => {
                     setIsShowScaleText(false);
                  }, 3000);
               }}
               onSwiper={(swiper) => {
                  setIsLoading(false);
               }}
               initialSlide={photo}
            >
               {images?.map((image) => (
                  <SwiperSlide key={image}>
                     <div className="swiper-zoom-container">
                        <Image
                           className="h-full object-contain select-none"
                           width={1920}
                           height={1080}
                           src={image}
                           alt={image}
                           loading="lazy"
                        ></Image>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
            <button
               onClick={handlePrevClick}
               className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center bg-black/50 disabled:opacity-50 left-3"
               disabled={SwiperRef.current?.swiper.isBeginning}
            >
               <ArrowPrevIcon width={40} height={40} className="fill-white" />
            </button>
            <button
               onClick={handleNextClick}
               className="absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center bg-black/50 disabled:opacity-50 right-3"
               disabled={SwiperRef.current?.swiper.isEnd}
            >
               <ArrowNextIcon width={40} height={40} className="fill-white" />
            </button>
            <button
               onClick={handleCloseClick}
               className={clsx(
                  'absolute top-3 left-3 z-10 w-10 h-10 p-3 rounded-full flex justify-center items-center bg-black/50',
                  isFullScreen ? 'hidden' : '',
               )}
            >
               <XMarkIcon width={40} height={40} className="fill-white" />
            </button>
            <div className="absolute top-3 right-3 z-10 h-10 flex flex-row-reverse gap-1">
               <button
                  onClick={() => {
                     setIsFullScreen((prev) => !prev);
                  }}
                  className="w-10 h-10 p-3 rounded-full flex justify-center items-center bg-black/50"
               >
                  {isFullScreen ? (
                     <ZoomFullScreenIcon className="fill-white !w-7 !h-7" />
                  ) : (
                     <ExitFullScreenIcon className="fill-white !w-7 !h-7" />
                  )}
               </button>
               <button
                  onClick={() => {
                     SwiperRef.current?.swiper.zoom.in(scale + 1);
                  }}
                  className="w-10 h-10 p-3 rounded-full flex justify-center items-center bg-black/50 disabled:opacity-50"
                  disabled={(SwiperRef.current?.swiper.zoom.scale || 1) >= ZOOM_SETTINGS.maxRatio}
               >
                  <ZoomInIcon className="fill-white !w-7 !h-7" />
               </button>
               <button
                  onClick={() => {
                     SwiperRef.current?.swiper.zoom.in(scale - 1);
                  }}
                  className="w-10 h-10 p-3 rounded-full flex justify-center items-center bg-black/50 disabled:opacity-50"
                  disabled={(SwiperRef.current?.swiper.zoom.scale || 1) <= ZOOM_SETTINGS.minRatio}
               >
                  <ZoomOutIcon className="fill-white !w-7 !h-7" />
               </button>
            </div>
            <div
               className={clsx(
                  'absolute py-1 px-2 rounded-md bg-black/50 text-white bottom-2 left-1/2 -translate-x-1/2 z-50 select-none',
                  isShowScaleText ? '' : 'hidden',
               )}
            >
               {scale}X
            </div>
         </div>
      </div>
   );
};

export default SliderImages;

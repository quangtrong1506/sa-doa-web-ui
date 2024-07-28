'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GProps {
   images?: string[];
   onImageClick?: (index: number) => void;
}
interface IProps extends GProps {
   onclick?: (index: number) => void;
}
const Image12 = ({ images, onclick }: IProps) => {
   return (
      <div className="flex w-full">
         {images?.map((image) => (
            <div
               className="flex-1 aspect-square overflow-hidden"
               key={image}
               onClick={() => {
                  onclick && onclick(images.indexOf(image));
               }}
            >
               <Image
                  className="w-full h-full object-contain"
                  src={image}
                  width={1280 / images.length}
                  height={1280 / images.length}
                  alt={image}
               />
            </div>
         ))}
      </div>
   );
};
const Image3 = ({ images, onclick }: IProps) => {
   return (
      <div className="w-full flex">
         <div className="w-2/3">
            <div
               className="w-full aspect-square overflow-hidden flex justify-center items-center"
               onClick={() => {
                  onclick && onclick(0);
               }}
            >
               <Image
                  className="w-full h-full object-cover"
                  src={images?.[0] || ''}
                  width={1280}
                  height={1280}
                  alt={images?.[0] || ''}
               />
            </div>
         </div>
         <div className="w-1/3 flex flex-wrap ps-1 gap-1">
            <div
               className="w-full h-[calc(50%_-_2px)] flex items-center justify-center overflow-hidden aspect-square "
               onClick={() => {
                  onclick && onclick(1);
               }}
            >
               <Image
                  className="w-full h-full object-cover"
                  src={images?.[1] || ''}
                  width={1280}
                  height={1280}
                  alt={images?.[1] || ''}
               />
            </div>
            <div
               className="w-full h-[calc(50%_-_2px)] flex items-center justify-center overflow-hidden aspect-square "
               onClick={() => {
                  onclick && onclick(2);
               }}
            >
               <Image
                  className="w-full h-full object-cover"
                  src={images?.[2] || ''}
                  width={1280}
                  height={1280}
                  alt={images?.[2] || ''}
               />
            </div>
         </div>
      </div>
   );
};

const Image4More = ({ images, onclick }: IProps) => {
   const imageSlice = images?.slice(0, images.length > 5 ? 5 : images.length);
   const [isShowImageMore, setIsShowImageMore] = useState(false);
   return (
      <div className="w-full flex flex-wrap gap-1">
         {imageSlice?.map((image, index) => (
            <div
               key={image}
               className={clsx(
                  'flex items-center justify-center overflow-hidden aspect-square relative',
                  index < 2 ? 'w-[calc(50%_-_2px)]' : '',
                  index > 1 && images?.length == 4 ? 'w-[calc(50%_-_2px)]' : '',
                  index > 1 && (images?.length || 0) > 4 ? 'w-[calc(100%_/_3_-_2.667px)]' : '',
               )}
               onClick={() => {
                  onclick && onclick(images?.indexOf(image) || 0);
               }}
            >
               <Image
                  className="w-full h-full object-cover"
                  src={image}
                  width={1280}
                  height={1280}
                  alt={image}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                  onLoad={() => {
                     if (index === 4) setIsShowImageMore(true);
                  }}
               />
               {isShowImageMore && (images?.length || 0) > 5 && index === 4 && (
                  <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black/50 select-none">
                     <span className="text-white text-4xl cursor-default">
                        +{(images?.length || 0) - imageSlice.length}
                     </span>
                  </div>
               )}
            </div>
         ))}
      </div>
   );
};
const GridImage = ({ images, onImageClick }: GProps) => {
   const [mounted, setMounted] = useState<boolean>(false);
   useEffect(() => {
      setMounted(true);
   }, []);
   if (!mounted) return null;
   return (
      <div className="w-full gap-1 flex flex-wrap">
         {images && images.length < 3 && <Image12 images={images} onclick={onImageClick} />}
         {images && images.length == 3 && <Image3 images={images} onclick={onImageClick} />}
         {images && images.length > 3 && <Image4More images={images} onclick={onImageClick} />}
      </div>
   );
};

export default GridImage;

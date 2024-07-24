'use client';

import { setPost } from '@/redux/features/post';
import { setUrlBack } from '@/redux/features/url';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IPost } from '../post/post';

interface GProps {
  post?: IPost;
  images: string[];
}
interface IProps extends GProps {
  onclick?: (postId: string, index: number) => void;
}
const Image12 = ({ images, post, onclick }: IProps) => {
  return (
    <div className="flex w-full">
      {images.map((image) => (
        <div
          className="flex-1 aspect-square overflow-hidden"
          key={image}
          onClick={() => {
            onclick && onclick(post?.id || '', images.indexOf(image));
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
const Image3 = ({ images, post, onclick }: IProps) => {
  return (
    <div className="w-full flex">
      <div className="w-2/3">
        <div
          className="w-full aspect-square overflow-hidden flex justify-center items-center"
          onClick={() => {
            onclick && onclick(post?.id || '', 0);
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={images[0]}
            width={1280}
            height={1280}
            alt={images[0]}
          />
        </div>
      </div>
      <div className="w-1/3 flex flex-wrap ps-1 gap-1">
        <div
          className="w-full h-[calc(50%_-_2px)] flex items-center justify-center overflow-hidden aspect-square "
          onClick={() => {
            onclick && onclick(post?.id || '', 1);
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={images[1]}
            width={1280}
            height={1280}
            alt={images[1]}
          />
        </div>
        <div
          className="w-full h-[calc(50%_-_2px)] flex items-center justify-center overflow-hidden aspect-square "
          onClick={() => {
            onclick && onclick(post?.id || '', 2);
          }}
        >
          <Image
            className="w-full h-full object-cover"
            src={images[2]}
            width={1280}
            height={1280}
            alt={images[2]}
          />
        </div>
      </div>
    </div>
  );
};

const Image4More = ({ images, post, onclick }: IProps) => {
  const imageSlice = images.slice(0, images.length > 5 ? 5 : images.length);
  const [isShowImageMore, setIsShowImageMore] = useState(false);
  return (
    <div className="w-full flex flex-wrap gap-1">
      {imageSlice.map((image, index) => (
        <div
          key={image}
          className={clsx(
            'flex items-center justify-center overflow-hidden aspect-square relative',
            index < 2 ? 'w-[calc(50%_-_2px)]' : '',
            index > 1 && images.length == 4 ? 'w-[calc(50%_-_2px)]' : '',
            index > 1 && images.length > 4 ? 'w-[calc(100%_/_3_-_2.667px)]' : '',
          )}
          onClick={() => {
            onclick && onclick(post?.id || '', images.indexOf(image));
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
          {isShowImageMore && images.length > 5 && index === 4 && (
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center bg-black/50 select-none">
              <span className="text-white text-4xl cursor-default">
                +{images.length - imageSlice.length}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
const GridImage = ({ images, post }: GProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleClickImage = (postId: string, index: number) => {
    const url = (window.location.pathname || '/') + (window.location.search || '');
    dispatch(setUrlBack(url));
    dispatch(setPost(post));
    router.push(`/posts/${post?.id || 'dev'}?p=${index}`);
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className="w-full gap-1 flex flex-wrap">
      {images.length < 3 && <Image12 post={post} images={images} onclick={handleClickImage} />}
      {images.length == 3 && <Image3 post={post} images={images} onclick={handleClickImage} />}
      {images.length > 3 && <Image4More post={post} images={images} onclick={handleClickImage} />}
    </div>
  );
};

export default GridImage;

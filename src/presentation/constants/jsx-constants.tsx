import HomeIcon from '@/presentation/components/icons/home.icon';
import ImageIcon from '@/presentation/components/icons/image.icon';
import ModelIcon from '@/presentation/components/icons/model.icon';
import SavedIcon from '@/presentation/components/icons/saved.icon';
import VideoIcon from '@/presentation/components/icons/video.icon';

const NAV_LINK = {
  home: {
    title: 'Trang chủ',
    href: '/',
    icon: <HomeIcon />,
  },
  videos: {
    title: 'Videos',
    href: '/videos',
    icon: <VideoIcon />,
  },
  images: {
    title: 'Hình ảnh',
    href: '/images',
    icon: <ImageIcon />,
  },
  models: {
    title: 'Cosplayers',
    href: '/cosplayers',
    icon: <ModelIcon />,
  },
  about: {
    title: 'Đã lưu',
    href: '/saved',
    icon: <SavedIcon className="scale-90" />,
  },
};

export { NAV_LINK };

import HomeIcon from '@/components/icons/home.icon';
import ImageIcon from '@/components/icons/image.icon';
import ModelIcon from '@/components/icons/model.icon';
import SavedIcon from '@/components/icons/saved.icon';
import VideoIcon from '@/components/icons/video.icon';

const NAV_LINK = {
  home: {
    title: 'Trang chủ',
    href: '/',
    icon: <HomeIcon />,
  },
  videos: {
    title: 'Tất cả video',
    href: '/videos',
    icon: <VideoIcon />,
  },
  images: {
    title: 'Tất cả hình ảnh',
    href: '/images',
    icon: <ImageIcon />,
  },
  models: {
    title: 'Người mẫu',
    href: '/models',
    icon: <ModelIcon />,
  },
  about: {
    title: 'Đã lưu',
    href: '/saved',
    icon: <SavedIcon />,
  },
};

export { NAV_LINK };

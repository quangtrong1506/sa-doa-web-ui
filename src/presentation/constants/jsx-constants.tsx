import HomeIcon from '@/presentation/components/icons/home.icon';
import VideoIcon from '@/presentation/components/icons/video.icon';
import ImageIcon from '@/presentation/components/icons/image.icon';
import ModelIcon from '@/presentation/components/icons/model.icon';
import SavedIcon from '@/presentation/components/icons/saved.icon';


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

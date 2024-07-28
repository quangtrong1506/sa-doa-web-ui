import { HomeIcon, ImageIcon, ModelIcon, SavedIcon, VideoIcon } from '../components/icons';
import { Routes } from '@/presentation/constants/Routes';


const NAV_LINK = {
  home: {
    title: 'Trang chủ',
    href: Routes.Home,
    icon: <HomeIcon />,
  },
  videos: {
    title: 'Videos',
    href: Routes.Videos,
    icon: <VideoIcon />,
  },
  images: {
    title: 'Hình ảnh',
    href: Routes.Images,
    icon: <ImageIcon />,
  },
  models: {
    title: 'Cosplayers',
    href: Routes.Cosplayers,
    icon: <ModelIcon />,
  },
  about: {
    title: 'Đã lưu',
    href: Routes.Saved,
    icon: <SavedIcon />,
  },
};

export { NAV_LINK };

import HomeIcon from '@/presentation/components/icons/home.icon';
import VideoIcon from '@/presentation/components/icons/video.icon';
import ImageIcon from '@/presentation/components/icons/image.icon';
import ModelIcon from '@/presentation/components/icons/model.icon';
import SavedIcon from '@/presentation/components/icons/saved.icon';
import { Routes } from '@/presentation/constants/Routes';


const NAV_LINK = {
  home: {
    title: 'Trang chủ',
    href: Routes.Home,
    icon: <HomeIcon />,
  },
  videos: {
    title: 'Tất cả video',
    href: Routes.Videos,
    icon: <VideoIcon />,
  },
  images: {
    title: 'Tất cả hình ảnh',
    href: Routes.Images,
    icon: <ImageIcon />,
  },
  models: {
    title: 'Người mẫu',
    href: Routes.Models,
    icon: <ModelIcon />,
  },
  about: {
    title: 'Đã lưu',
    href: Routes.Saved,
    icon: <SavedIcon />,
  },
};

export { NAV_LINK };

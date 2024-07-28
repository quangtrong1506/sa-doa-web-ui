import { HomeIcon, ImageIcon, ModelIcon, SavedIcon, VideoIcon } from '../components/icons';

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

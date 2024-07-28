import { GetTimeAgoProps } from './time';

const getTimeAgo: GetTimeAgoProps = (IOSTimeString: string = new Date().toISOString()) => {
   const now = new Date();
   const then = new Date(IOSTimeString);
   const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
   if (seconds < 60) return 'Vừa xong';
   else if (seconds < 3600) return `${Math.floor(seconds / 60)} phút trước`;
   else if (seconds < 86400) return `${Math.floor(seconds / 3600)} giờ trước`;
   else if (seconds < 2592000) return `${Math.floor(seconds / 86400)} ngày trước`;
   else if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} tháng trước`;
   return `${Math.floor(seconds / 31536000)} năm trước`;
};

export type { GetTimeAgoProps, TimeProps } from './time';
export { getTimeAgo };

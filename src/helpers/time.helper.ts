const getTimeAgo = (timePusher: string) => {
  const now = new Date();
  const then = new Date(timePusher);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
  if (seconds < 60) return 'Just now';
  else if (seconds < 3600)
    return `${Math.floor(seconds / 60)} minute${seconds / 60 > 1 ? 's' : ''} ago`;
  else if (seconds < 86400)
    return `${Math.floor(seconds / 3600)} hour${seconds / 3600 > 1 ? 's' : ''} ago`;
  else if (seconds < 2592000)
    return `${Math.floor(seconds / 86400)} day${seconds / 86400 > 1 ? 's' : ''} ago`;
  else if (seconds < 31536000)
    return `${Math.floor(seconds / 2592000)} month${seconds / 2592000 > 1 ? 's' : ''} ago`;
  return `${Math.floor(seconds / 31536000)} year${seconds / 31536000 > 1 ? 's' : ''} ago`;
};
const TimerHandler = {
  getTimeAgo,
};
export { getTimeAgo };
export default TimerHandler;

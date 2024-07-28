declare type GetTimeAgoProps = (string: string = new Date().toISOString()) => string;

export { GetTimeAgoProps, TimeProps };

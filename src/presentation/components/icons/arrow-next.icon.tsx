import clsx from 'clsx';
import { IconProps } from './interface';

const ArrowNextIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={320}
         height={512}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 320 512"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
   );
};

export { ArrowNextIcon };

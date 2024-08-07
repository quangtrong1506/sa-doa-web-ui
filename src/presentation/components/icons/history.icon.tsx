import clsx from 'clsx';
import { IconProps } from './interface';

const HistoryIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={20}
         height={20}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 20 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M9.033.971a9.66 9.66 0 0 0-2.183.516 9.117 9.117 0 0 0-4.983 4.496C1.218 7.309.933 8.536.933 10c0 1.465.286 2.694.934 4.017a9.008 9.008 0 0 0 4.116 4.116 8.947 8.947 0 0 0 3.112.9c.443.043 1.367.043 1.81 0 3.073-.303 5.855-2.224 7.213-4.982.656-1.334.949-2.582.949-4.051 0-1.47-.293-2.717-.951-4.054-1.356-2.754-4.14-4.677-7.211-4.979a14.618 14.618 0 0 0-1.872.004m1.884 1.499c1.107.134 2.329.58 3.233 1.181a7.62 7.62 0 0 1 3.051 3.98c.273.833.373 1.465.373 2.369 0 .904-.1 1.536-.373 2.369a7.35 7.35 0 0 1-1.749 2.891c-1.566 1.619-3.723 2.458-5.927 2.307-1.103-.076-1.989-.317-2.942-.799a7.175 7.175 0 0 1-2.019-1.489 7.514 7.514 0 0 1-2.083-4.262 9.222 9.222 0 0 1 0-2.034A7.604 7.604 0 0 1 6.65 3.201a7.528 7.528 0 0 1 4.267-.731M9.683 4.33a.892.892 0 0 0-.223.157c-.201.215-.193.096-.193 3.013s-.008 2.799.193 3.012c.056.059.763.431 1.883.992 1.724.862 1.8.896 1.983.895.435-.001.742-.308.74-.74a.702.702 0 0 0-.234-.538c-.061-.052-.783-.43-1.605-.841l-1.494-.747V7.175c-.001-2.224-.005-2.366-.063-2.492a.755.755 0 0 0-.987-.353"
            fillRule="evenodd"
         />
      </svg>
   );
};

export { HistoryIcon };

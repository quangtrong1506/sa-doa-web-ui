import clsx from 'clsx';
import { IconProps } from './interface';

const SavedIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={9}
         height={12}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 9 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path d="M7.875 0H1.125C0.503672 0 0 0.503672 0 1.125V12L4.5 9.375L9 12V1.125C9 0.503672 8.49633 0 7.875 0ZM7.875 10.0413L4.5 8.07258L1.125 10.0413V1.26562C1.125 1.22833 1.13982 1.19256 1.16619 1.16619C1.19256 1.13982 1.22833 1.125 1.26562 1.125H7.73438C7.81205 1.125 7.875 1.18788 7.875 1.26553V10.0413Z" />
      </svg>
   );
};

export { SavedIcon };

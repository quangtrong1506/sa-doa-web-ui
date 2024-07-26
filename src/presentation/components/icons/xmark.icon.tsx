import clsx from 'clsx';
import { IconProps } from './interface';

const XMarkIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={12}
         height={12}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 12 12"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path d="M6.86558 6L11.2184 0.960966C11.2913 0.877224 11.23 0.75 11.1172 0.75H9.79397C9.71603 0.75 9.64141 0.783819 9.59001 0.841794L6 4.99831L2.40999 0.841794C2.36025 0.783819 2.28563 0.75 2.20603 0.75H0.882789C0.770031 0.75 0.708678 0.877224 0.781639 0.960966L5.13442 6L0.781639 11.039C0.765295 11.0577 0.75481 11.0805 0.751427 11.1048C0.748045 11.1291 0.751908 11.1538 0.762558 11.176C0.773208 11.1982 0.790198 11.217 0.81151 11.2301C0.832821 11.2432 0.85756 11.2501 0.882789 11.25H2.20603C2.28397 11.25 2.35859 11.2162 2.40999 11.1582L6 7.00169L9.59001 11.1582C9.63975 11.2162 9.71437 11.25 9.79397 11.25H11.1172C11.23 11.25 11.2913 11.1228 11.2184 11.039L6.86558 6Z" />
      </svg>
   );
};
export default XMarkIcon;

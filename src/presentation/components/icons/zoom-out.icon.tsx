import clsx from 'clsx';
import { IconProps } from './interface';

const ZoomOutIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={246}
         height={246}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 246 246"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M91,7c40.919-.457,67.167,12.555,84,36l4,3v2l2,1v2l2,1q0.5,2,1,4l2,1v2h1q0.5,2,1,4h1v3h1v2h1v3a81.344,81.344,0,0,1,6,32v13h-1v6h-1v6h-1v4h-1v2h-1q-0.5,3.5-1,7h-1q-1,3-2,6h-1v2h-1q-0.5,2-1,4l-2,1v2l-2,1v2l-2,1v2h-1c-0.925,1.366-.688,1.763-1,4,2.667,1.553,3.917,3.918,6,6q6,6,12,12l32,31,15,16c0.094,6.122-1.062,7.835-2,12-3.861,1.756-5.767,2.984-12,3-1.721-2-2.323-.843-4-2l-2-3-6-5-12-13-26-25c-4.083-4.083-12.994-16.185-19-17-2.094,3.229-5.758,3.86-9,6q-0.5,1-1,2h-2v1h-2v1l-4,1v1l-5,1v1h-3v1h-2v1l-12,2v1h-9v1c-5.158,1.438-15.371.028-19-1l-13-1v-1H74v-1H71v-1H68v-1H65v-1H62v-1l-6-2v-1H54v-1l-4-1-1-2H47l-1-2H44l-2-3H40l-4-5H34l-4-5-2-1v-2l-5-4v-2l-3-2v-2l-2-1v-2l-2-1-1-4H14v-2H13l-2-6H10l-2-9H7v-3H6l-1-9H4V111H3V97H4V87H5l1-9H7V75H8V72H9V69h1V66h1l1-4h1V60h1V58h1V56h1V54l2-1V51h1l1-3,2-1V45l5-4V39l7-6,1-2h2l3-4h2l2-3h2l2-3,4-1V19h2V18h2V17h2V16l16-6h4V9C81.641,7.85,88.567,9.109,91,7ZM90,29c-2.568,2.2-7.452.68-11,2v1H77v1H73v1l-6,2v1H64v1l-3,1-1,2H58l-1,2H55l-3,4H50l-6,7-2,1v2l-3,2v2l-2,1v2l-2,1-1,4-2,1-1,6H30v2H29v3H28v3H27v4H26v6H25c-1.786,6.331.708,22.023,2,26l3,13h1v2h1v2h1v2h1v2h1v2l2,1v2l2,1v2l3,2v2l6,5,3,4h2l2,3h2l1,2h2l1,2h2l1,2h2v1h3v1l4,1v1h3v1h3v1h4v1l15,1v1h5v-1h8v-1h6v-1h4v-1h3v-1h3v-1h2v-1h3v-1h2v-1h2q0.5-1,1-2l4-1q0.5-1,1-2h2l2-3h2l3-4,9-8v-2l2-1v-2l2-1v-2l2-1q0.5-2,1-4h1q0.5-2,1-4h1v-3h1v-3h1v-3h1v-4h1v-4h1V107h1q-0.5-8-1-16h-1V87h-1V83h-1V79h-1V77h-1V74h-1q-0.5-2-1-4h-1q-0.5-2-1-4l-2-1V63l-2-1V60l-3-2c-10.181-14.336-23.249-22.253-42-28h-6C105.788,28.5,96.825,28.963,90,29Zm52,83c-2.94.734-2.265,1.663-3,2h-4v1H113c-17.769,0-38.29.789-53-2-1.584-2.731-2.742-2.446-3-7-2.334-2.445,0-6.725,1-9,1.107-.6,1.564-1.736,2-2h2V94c5.66-2.322,18.466-1,26-1h45v1h6c1.973,3,2.825.941,4,5h1q0.5,3.5,1,7h-1v3h-1Q142.5,110.5,142,112Z"
            fillRule="evenodd"
         />
      </svg>
   );
};
export default ZoomOutIcon;

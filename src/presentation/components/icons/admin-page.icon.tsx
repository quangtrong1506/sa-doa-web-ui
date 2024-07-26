import clsx from 'clsx';
import { IconProps } from './interface';

const AdminPageIcon = ({ className, ...props }: IconProps) => {
   return (
      <svg
         width={22}
         height={20}
         className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
         viewBox="0 0 22 20"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M1.527.278C1.21.355.897.537.639.795a1.839 1.839 0 0 0-.53.912c-.071.28-.072.424-.072 8.285 0 7.86.001 8.005.072 8.284.041.157.126.378.191.491.156.272.514.621.788.767.459.245-.252.228 9.901.229 6.543 0 9.267-.011 9.405-.04.338-.07.691-.264.955-.525.296-.293.446-.549.542-.922.071-.279.072-.424.072-8.284 0-7.861-.001-8.005-.072-8.285a2.482 2.482 0 0 0-.187-.484c-.155-.271-.523-.63-.792-.773-.459-.245.258-.229-9.93-.226-7.85.002-9.273.01-9.455.054m18.617.748c.392.064.71.292.897.642l.097.184.01 2.997.01 2.998H.842l.01-2.998.01-2.997.097-.184c.179-.336.509-.58.863-.64C2.08.985 19.88.982 20.144 1.026M4.033 3.039a1.58 1.58 0 0 0-.734.448 1.744 1.744 0 0 0 .501 2.81c.286.137.293.138.747.138.453 0 .461-.001.733-.135.285-.14.601-.414.75-.652.217-.345.315-.841.244-1.23a1.96 1.96 0 0 0-.834-1.216c-.371-.226-.989-.298-1.407-.163m5.144.213c-.104.021-.23.179-.23.289 0 .047.039.131.088.188l.089.103h10.78l.095-.089c.127-.12.127-.29 0-.409l-.095-.089-5.323-.004c-2.927-.003-5.359.002-5.404.011m-4.246.577c.186.078.391.281.483.479.241.519-.044 1.159-.588 1.321-.232.069-.329.068-.575-.004-.257-.076-.558-.37-.623-.608-.07-.261-.027-.618.098-.802.28-.414.766-.57 1.205-.386M9.023 5.12c-.1.127-.096.243.012.369l.089.103H16.971l.094-.089c.123-.115.127-.29.01-.4l-.085-.08H9.099l-.076.097m12.125 8.254-.01 4.758-.097.183a1.22 1.22 0 0 1-.897.643c-.293.048-17.995.048-18.288 0a1.22 1.22 0 0 1-.897-.643l-.097-.183-.01-4.758-.01-4.757h20.316l-.01 4.757M2.251 10.389c-.128.111-.134.282-.014.41l.086.091h10.791l.08-.085c.116-.124.108-.327-.017-.426l-.097-.076H2.351l-.1.086m0 1.76c-.128.111-.134.282-.014.41l.086.091h7.858l.079-.085c.117-.124.108-.327-.017-.426-.096-.075-.106-.076-3.994-.076H2.351l-.1.086m0 2.237c-.128.11-.134.281-.014.409l.086.092h10.791l.08-.085c.116-.124.108-.328-.017-.426l-.097-.076H2.351l-.1.086m0 1.76c-.128.11-.134.281-.014.409l.086.092h7.858l.079-.085c.117-.124.108-.328-.017-.426-.096-.076-.106-.076-3.994-.076H2.351l-.1.086"
            fillRule="evenodd"
         />
      </svg>
   );
};
export default AdminPageIcon;

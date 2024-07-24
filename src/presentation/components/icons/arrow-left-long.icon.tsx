import clsx from 'clsx';

const ArrowLeftLongIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width={512}
      height={512}
      className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
    </svg>
  );
};
export default ArrowLeftLongIcon;

import clsx from 'clsx';

const ArrowDownIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={clsx('w-full h-full fill-svgDefault dark:fill-svgDefault_d', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13.2212 5.33301H12.1686C12.097 5.33301 12.0296 5.35905 11.9875 5.40176L8.0001 9.48092L4.01267 5.40176C3.97056 5.35905 3.90319 5.33301 3.83161 5.33301H2.77896C2.68773 5.33301 2.6344 5.41009 2.68773 5.4653L7.63659 10.5288C7.81624 10.7122 8.18397 10.7122 8.36221 10.5288L13.3111 5.4653C13.3658 5.41009 13.3125 5.33301 13.2212 5.33301Z" />
    </svg>
  );
};
export default ArrowDownIcon;

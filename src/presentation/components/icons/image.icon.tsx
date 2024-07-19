import clsx from 'clsx';

const ImageIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      className={clsx('w-full h-full fill-svgDefault dark:fill-svgDefault_d scale-90', className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.267.315A4.766 4.766 0 0 0 .428 3.75c-.163.597-.16.474-.16 6.25s-.003 5.653.16 6.25a4.757 4.757 0 0 0 3.855 3.435c.446.07 10.988.07 11.434 0 1.746-.272 3.215-1.503 3.762-3.152.255-.768.234-.217.247-6.35.008-3.988.001-5.582-.026-5.8a5.68 5.68 0 0 0-.335-1.231C18.82 1.842 17.636.807 16.25.428c-.598-.164-.468-.16-6.283-.157-4.122.003-5.511.014-5.7.044m11.03 1.453c.79.081 1.451.391 1.997.938.547.546.857 1.207.938 1.997.04.39.049 7.364.01 7.363-.014 0-.057-.049-.095-.108-.167-.258-.635-.802-.969-1.126-.484-.47-.875-.755-1.389-1.014-.684-.345-1.248-.485-1.954-.485-1.139 0-2.196.43-3.236 1.317-.404.344-.75.756-1.236 1.472-.239.352-.531.753-.649.891-.47.551-.873.735-1.291.59-.331-.115-.608-.331-1.133-.883-.542-.57-.92-.875-1.335-1.08-.408-.201-.687-.277-1.092-.297a2.217 2.217 0 0 0-1.152.224 2.612 2.612 0 0 0-.777.521l-.201.186V8.657c0-2.264.013-3.743.035-3.954.081-.79.391-1.451.938-1.997A3.228 3.228 0 0 1 4.65 1.77c.401-.042 10.238-.044 10.647-.002M5.15 4.047c-.278.07-.489.191-.7.402-.862.862-.392 2.317.816 2.524.981.169 1.876-.726 1.707-1.707-.147-.859-.995-1.426-1.823-1.219m.609.805a.7.7 0 0 1 0 1.296c-.441.185-.956-.159-.958-.641-.003-.491.511-.842.958-.655m8.741 6.053c1.1.274 2.201 1.34 3.111 3.012.119.22.256.456.303.525a.806.806 0 0 0 .334.268c.057.019-.037.88-.13 1.2a3.172 3.172 0 0 1-.824 1.384 3.186 3.186 0 0 1-1.997.938c-.462.047-10.132.047-10.594 0a3.186 3.186 0 0 1-1.997-.938 3.186 3.186 0 0 1-.938-1.997c-.055-.538-.051-.582.061-.629.15-.062.254-.192.456-.569.679-1.271 1.418-1.58 2.287-.957.116.083.329.276.474.429.742.788.88.911 1.344 1.19.619.372 1.38.48 1.993.284.775-.247 1.405-.858 2.351-2.278.322-.485.861-1.046 1.273-1.327.83-.566 1.657-.744 2.493-.535"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default ImageIcon;
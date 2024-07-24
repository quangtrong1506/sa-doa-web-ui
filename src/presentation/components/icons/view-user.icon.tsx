import clsx from 'clsx';

const VideoUserIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      width={24}
      height={24}
      className={clsx('fill-svgDefault dark:fill-svgDefault_d', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.48.662C1.6.852.846 1.614.66 2.5c-.088.422-.088 18.578 0 19a2.442 2.442 0 0 0 1.84 1.84c.422.088 18.578.088 19 0a2.442 2.442 0 0 0 1.84-1.84c.088-.422.088-18.578 0-19A2.442 2.442 0 0 0 21.5.66C21.09.574 2.88.576 2.48.662m19.006.817a1.64 1.64 0 0 1 1.035 1.035c.071.228.079.37.079 1.37V5H1.4V3.884c0-1 .008-1.142.079-1.37.146-.466.56-.884 1.021-1.032.234-.076.473-.078 9.486-.08 9.111-.002 9.249-.001 9.5.077m-17.835.792a.418.418 0 0 0-.19.135c-.101.12-.101.121-.101.94v.82l.117.117c.215.215.562.13.642-.157.053-.189.053-1.383 0-1.572a.46.46 0 0 0-.096-.191.588.588 0 0 0-.372-.092m3.279.018c-.235.06-.268.167-.284.906-.016.805.007.984.143 1.11a.38.38 0 0 0 .534-.022l.117-.117v-.82c0-.815-.001-.821-.1-.938-.113-.135-.224-.168-.41-.119m-1.798.087-.112.097-.012.789c-.014.834.007.968.166 1.08.133.092.374.074.485-.038.133-.132.148-.259.134-1.098l-.013-.733-.112-.097a.417.417 0 0 0-.536 0m5.601.482a.41.41 0 0 0-.17.136.535.535 0 0 0 0 .412c.107.199-.019.194 5.02.194 4.164 0 4.72-.007 4.835-.062a.37.37 0 0 0 0-.676c-.115-.055-.669-.062-4.844-.06-3.917.001-4.735.01-4.841.056M22.6 13.516c0 7.582-.001 7.72-.079 7.97a1.64 1.64 0 0 1-1.035 1.035c-.251.078-.392.079-9.486.079-9.094 0-9.235-.001-9.486-.079a1.64 1.64 0 0 1-1.035-1.035c-.078-.25-.079-.388-.079-7.97V5.8h21.2v7.716M11.56 7.048c-.945.117-1.927.661-2.582 1.432a4.145 4.145 0 0 0-.92 2.038c-.073.482-.072.723.001 1.213a4.099 4.099 0 0 0 2.137 3.024c1.373.715 2.923.635 4.228-.217.304-.198.916-.81 1.114-1.114.591-.906.821-1.973.643-2.989-.385-2.198-2.386-3.665-4.621-3.387m1.32.732c.979.197 1.881.92 2.337 1.873.247.519.322.859.321 1.467-.002.715-.126 1.196-.45 1.737-.137.228-.144.233-.18.14-.228-.584-.556-.959-1.061-1.213-.472-.238-.883-.316-1.547-.294-.46.016-.617.038-.88.124-.951.309-1.535 1.015-1.539 1.856-.001.115-.018.21-.04.21-.058 0-.522-.559-.675-.814-.318-.529-.454-1.054-.453-1.746.001-.743.162-1.301.539-1.867a4.45 4.45 0 0 1 .928-.956c.738-.527 1.717-.714 2.7-.517m-.846.834c-.378.084-.728.366-.92.742-.08.157-.094.243-.094.584 0 .355.012.422.106.6.581 1.099 2.179.966 2.535-.21.302-.994-.599-1.945-1.627-1.716m.646.728c.191.095.36.375.36.596a.75.75 0 0 1-.292.546c-.132.096-.2.116-.388.116a.654.654 0 0 1-.576-.293c-.118-.159-.119-.574-.002-.732.226-.302.578-.394.898-.233m.562 2.932c.338.109.664.338.827.581.141.209.19.363.226.707l.024.223-.31.203a3.347 3.347 0 0 1-1.079.479c-.381.094-1.215.094-1.61 0-.278-.066-.918-.345-1.098-.479-.074-.056-.072-.059.046-.085.184-.041.253-.145.295-.449.092-.657.504-1.064 1.247-1.233.362-.083 1.093-.056 1.432.053m-8.47 4.906c-.136.095-.188.305-.117.473a.43.43 0 0 0 .139.184c.057.03 2.181.043 7.214.043 7.886 0 7.259.022 7.351-.257.054-.162-.022-.39-.153-.46-.057-.03-2.181-.043-7.214-.043-6.283 0-7.144.007-7.22.06m0 2c-.136.095-.188.305-.117.473a.43.43 0 0 0 .139.184c.057.03 1.685.043 5.466.043h5.386l.117-.117c.161-.161.161-.365 0-.526l-.117-.117h-5.394c-4.735 0-5.405.007-5.48.06"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default VideoUserIcon;

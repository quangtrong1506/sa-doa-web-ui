'use client';

import {
   AdminPageIcon,
   ArrowDownIcon,
   ArrowLeftLongIcon,
   ArrowNextIcon,
   ArrowPrevIcon,
   CheckIcon,
   DeleteIcon,
   ExitFullScreenIcon,
   HistoryIcon,
   HomeIcon,
   ImageIcon,
   LogoutIcon,
   ModelIcon,
   MoonIcon,
   MoreIcon,
   PenEditIcon,
   ReportIcon,
   SavedIcon,
   SearchIcon,
   SortByColIcon,
   SunIcon,
   VideoIcon,
   XMarkIcon,
   ZoomFullScreenIcon,
   ZoomInIcon,
   ZoomOutIcon,
} from '@/presentation/components/icons';
import Tooltip from '@/presentation/components/reuse/tooltip';
import { useCopyToClipboard } from 'react-use';
const size = 30;
const ICONS = [
   {
      key: 'AdminPageIcon',
      component: <AdminPageIcon width={size} height={size} />,
   },
   {
      key: 'ArrowDownIcon',
      component: <ArrowDownIcon width={size} height={size} />,
   },
   {
      key: 'ArrowLeftLongIcon',
      component: <ArrowLeftLongIcon width={size} height={size} />,
   },
   {
      key: 'ArrowNextIcon',
      component: <ArrowNextIcon width={size} height={size} />,
   },
   {
      key: 'ArrowPrevIcon',
      component: <ArrowPrevIcon width={size} height={size} />,
   },
   {
      key: 'CheckIcon',
      component: <CheckIcon width={size} height={size} />,
   },
   {
      key: 'DeleteIcon',
      component: <DeleteIcon width={size} height={size} />,
   },
   {
      key: 'ExitFullScreenIcon',
      component: <ExitFullScreenIcon width={size} height={size} />,
   },
   {
      key: 'HistoryIcon',
      component: <HistoryIcon width={size} height={size} />,
   },
   {
      key: 'HomeIcon',
      component: <HomeIcon width={size} height={size} />,
   },
   {
      key: 'ImageIcon',
      component: <ImageIcon width={size} height={size} />,
   },
   {
      key: 'LogoutIcon',
      component: <LogoutIcon width={size} height={size} />,
   },
   {
      key: 'ModelIcon',
      component: <ModelIcon width={size} height={size} />,
   },
   {
      key: 'MoonIcon',
      component: <MoonIcon width={size} height={size} />,
   },
   {
      key: 'MoreIcon',
      component: <MoreIcon width={size} height={size} />,
   },
   {
      key: 'PenEditIcon',
      component: <PenEditIcon width={size} height={size} />,
   },
   {
      key: 'ReportIcon',
      component: <ReportIcon width={size} height={size} />,
   },
   {
      key: 'SavedIcon',
      component: <SavedIcon width={size} height={size} />,
   },
   {
      key: 'SearchIcon',
      component: <SearchIcon width={size} height={size} />,
   },
   {
      key: 'SunIcon',
      component: <SunIcon width={size} height={size} />,
   },
   {
      key: 'VideoIcon',
      component: <VideoIcon width={size} height={size} />,
   },
   // {
   //    key: 'ViewUserIcon',
   //    component: <ViewUserIcon width={size} height={size} />,
   // },
   {
      key: 'XmarkIcon',
      component: <XMarkIcon width={size} height={size} />,
   },
   {
      key: 'ZoomFullScreenIcon',
      component: <ZoomFullScreenIcon width={size} height={size} />,
   },
   {
      key: 'SortByColIcon',
      component: <SortByColIcon width={size} height={size} />,
   },
   {
      key: 'ZoomInIcon',
      component: <ZoomInIcon width={size} height={size} />,
   },
   {
      key: 'ZoomOutIcon',
      component: <ZoomOutIcon width={size} height={size} />,
   },
] as {
   key: string;
   component: JSX.Element;
}[];

const IconPreviewPage = () => {
   const [copyState, copyToClipboard] = useCopyToClipboard();
   const icons = ICONS.sort((a, b) => a.key.localeCompare(b.key));
   return (
      <div className="flex gap-10 p-10 mt-3 flex-wrap">
         {icons.map((icon) => {
            return (
               <div
                  key={icon.key}
                  className="w-1/4 xl:w-[250px]"
                  onClick={() => {
                     copyToClipboard(icon.key);
                  }}
               >
                  <div className="flex gap-3 items-center cursor-pointer relative" data-tooltip>
                     {icon.component}
                     <span className="font-semibold xl:text-xl text-lg line-clamp-1">
                        {icon.key}
                     </span>
                     <Tooltip>{copyState.value === icon.key ? 'Copied!' : 'Copy'}</Tooltip>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default IconPreviewPage;

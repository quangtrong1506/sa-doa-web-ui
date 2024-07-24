'use client';

import AdminPageIcon from '@/presentation/components/icons/admin-page.icon';
import ArrowDownIcon from '@/presentation/components/icons/arrow-down.icon';
import ArrowLeftLongIcon from '@/presentation/components/icons/arrow-left-long.icon';
import ArrowNextIcon from '@/presentation/components/icons/arrow-next.icon';
import ArrowPrevIcon from '@/presentation/components/icons/arrow-prev.icon';
import CheckIcon from '@/presentation/components/icons/check.icon';
import DeleteIcon from '@/presentation/components/icons/delete.icon';
import ExitFullScreenIcon from '@/presentation/components/icons/exit-full-screen.icon';
import HistoryIcon from '@/presentation/components/icons/history.icon';
import HomeIcon from '@/presentation/components/icons/home.icon';
import ImageIcon from '@/presentation/components/icons/image.icon';
import LogoutIcon from '@/presentation/components/icons/logout.icon';
import ModelIcon from '@/presentation/components/icons/model.icon';
import MoonIcon from '@/presentation/components/icons/moon.icon';
import MoreIcon from '@/presentation/components/icons/more.icon';
import PenEditIcon from '@/presentation/components/icons/pen-edit.icon';
import ReportIcon from '@/presentation/components/icons/report.icon';
import SavedIcon from '@/presentation/components/icons/saved.icon';
import SearchIcon from '@/presentation/components/icons/search.icon';
import SunIcon from '@/presentation/components/icons/sun.icon';
import VideoIcon from '@/presentation/components/icons/video.icon';
import ViewUserIcon from '@/presentation/components/icons/view-user.icon';
import XmarkIcon from '@/presentation/components/icons/xmark.icon';
import ZoomFullScreenIcon from '@/presentation/components/icons/zoom-full-screen.icon';
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
  {
    key: 'ViewUserIcon',
    component: <ViewUserIcon width={size} height={size} />,
  },
  {
    key: 'XmarkIcon',
    component: <XmarkIcon width={size} height={size} />,
  },
  {
    key: 'ZoomFullScreenIcon',
    component: <ZoomFullScreenIcon width={size} height={size} />,
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
            className="flex gap-3 items-center cursor-pointer relative w-[222px]"
            data-tooltip
            onClick={() => {
              copyToClipboard(icon.key);
            }}
          >
            {icon.component}
            <span className="font-semibold xl:text-xl text-lg line-clamp-1">{icon.key}</span>
            <Tooltip>{copyState.value === icon.key ? 'Copied!' : 'Copy'}</Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default IconPreviewPage;

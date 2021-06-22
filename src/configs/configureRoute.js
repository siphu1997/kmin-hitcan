import ChatIcon from "assets/svg/ChatIcon";
import HistoryIcon from "assets/svg/HistoryIcon";
import JobApplyIcon from "assets/svg/JobApplyIcon";
import ScheduleIcon from "assets/svg/ScheduleIcon";
import UserProfileIcon from "assets/svg/UserProfileIcon";
import Chat from "screens/Chat";
import InterviewSchedule from "screens/InterviewSchedule";
import UserProfile from "screens/UserProfile";
import WorkHistory from "screens/WorkHistory";
import { convertArrayToObject } from "utils";

export const linkSidebarLeft = [
  {
    key: "user-profile",
    path: "/user-profile",
    label: "Hồ sơ cá nhân",
    exact: true,
    component: UserProfile,
    icon: UserProfileIcon
  },
  {
    key: "user-profile",
    path: "/job/aplly",
    label: "Đơn ứng tuyển",
    exact: true,
    component: UserProfile,
    icon: JobApplyIcon
  },
  {
    key: "chat",
    path: "/chat",
    label: "Trao đổi với công ty",
    exact: true,
    component: Chat,
    icon: ChatIcon
  },
  {
    key: "interview-schedule",
    path: "/interview/schedule",
    label: "Lịch sự kiện",
    exact: true,
    component: InterviewSchedule,
    icon: ScheduleIcon
  },
  {
    key: "work-history",
    path: "/work/history",
    label: "Lịch sử công việc",
    exact: true,
    component: WorkHistory,
    icon: HistoryIcon
  }
];

export const listRouteByKey = convertArrayToObject(linkSidebarLeft, "key");

export default linkSidebarLeft;

import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import DocTextIcon from "~/icons/doctext-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";

import { NavItem } from "~/models/types";

const navData: NavItem[] = [
  {
    id: "1",
    label: "Home",
    path: "dashboard",
    icon: <IconHome />,
  },
  {
    id: "2",
    label: "Profile",
    path: "dashboard",
    icon: <IconUsers />,
  },
  {
    id: "3",
    label: "Settings",
    path: "dashboard",
    icon: <IconSettings />,
  },
  {
    id: "4",
    label: "Products",
    path: "dashboard/test",
    icon: <BoxIcon />,
  },
  {
    id: "5",
    label: "Orders",
    path: "dashboard/orders",
    icon: <CartIcon />,
    badge: "50",
  },
  {
    id: "6",
    label: "Proposals",
    path: "dashboard",
    icon: <DocTextIcon />,
    badge: "21",
  },
  {
    id: "7",
    label: "Customers",
    path: "dashboard",
    icon: <IconUsers />,
  },
  {
    id: "8",
    label: "Analytics",
    path: "dashboard",
    icon: <LoadingCircle />,
  },
];

export default navData;

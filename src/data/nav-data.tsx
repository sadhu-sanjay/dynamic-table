import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import IconCircleUser from "~/icons/circle-user";
import DocTextIcon from "~/icons/doctext-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";
import LoadingCircle from "~/icons/loading-circle";

export const navData = [
  {
    id: "1",
    label: "Home",
    path: "/",
    icon: <IconHome />,
  },
  {
    id: "2",
    label: "Profile",
    path: "#",
    icon: <IconUsers />,
  },
  {
    id: "3",
    label: "Settings",
    path: "/#",
    icon: <IconSettings />,
  },
  {
    id: "4",
    label: "Products",
    path: "#",
    icon: <BoxIcon />,
  },
  {
    id: "5",
    label: "Orders",
    path: "/orders",
    icon: <CartIcon />,
    badge: "50",
  },
  {
    id: "6",
    label: "Proposals",
    path: "/proposals",
    icon: <DocTextIcon />,
    badge: "21",
  },
  {
    id: "7",
    label: "Customers",
    path: "#",
    icon: <IconUsers />,
  },
  {
    id: "8",
    label: "Analytics",
    path: "#",
    icon: <LoadingCircle />,
  },
];

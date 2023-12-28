import BoxIcon from "~/icons/box-icon";
import CartIcon from "~/icons/cart-icon";
import IconCircleUser from "~/icons/circle-user";
import DocTextIcon from "~/icons/doctext-icon";
import IconHome from "~/icons/icon-home";
import IconSettings from "~/icons/icon-settings";
import IconUsers from "~/icons/icon-users";

export const navData = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: <IconHome />,
  },
  {
    id: 8,
    label: "Profile",
    path: "#",
    icon: <IconUsers />,
  },
  {
    id: 10,
    label: "Settings",
    path: "/#",
    icon: <IconSettings />,
  },
  {
    id: 13,
    label: "Products",
    path: "#",
    icon: <BoxIcon />,
  },
  {
    id: 14,
    label: "Orders",
    path: "/orders",
    icon: <CartIcon />,
    badge: "1000",
  },
  {
    id: 15,
    label: "Proposals",
    path: "/proposals",
    icon: <DocTextIcon />,
  },
  {
    id: 16,
    label: "Customers",
    path: "#",
    icon: <IconUsers />,
  },
  {
    id: 17,
    label: "Analytics",
    path: "#",
    icon: <IconCircleUser />,
  },
];

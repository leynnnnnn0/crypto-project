import { FaHome, FaChartArea, FaWallet } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

const sidebarData = [
  {
    name: "Overview",
    icon: <FaHome />,
    to: "/overview",
  },
  {
    name: "Wallet",
    icon: <FaWallet />,
    to: "/wallet",
  },
  {
    name: "Market",
      icon: <SiCoinmarketcap />,
    to: "/market"
  },
];

const settingsData = [
  {
    name: "Settings",
    icon: <IoIosSettings />,
    to: "/settings",
  },
  {
    name: "Help",
    icon: <RiCustomerService2Fill />,
    to: "/help",
  },
  {
    name: "Log out",
    icon: <CiLogout />,
    to: "/overview",
  },
];

export { sidebarData, settingsData };

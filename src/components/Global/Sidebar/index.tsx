import React from "react";
import Link from "next/link";
import cn from "classnames";
import SidebarHeader from "@/components/Global/Sidebar/SidebarHeader";
import SidebarUtils from "@/components/Global/Sidebar/SidebarUtils";
import SidebarLinks from "@/components/Global/Sidebar/SidebarLinks";
import SidebarLoginIcon from "@/components/Global/Sidebar/SidebarLogoutIcon";

type Props = {
  onCrossClick: () => void;
  isSidebarOpen: boolean;
};

const Sidebar: React.FC<Props> = ({ onCrossClick, isSidebarOpen }) => {
  const showOverlay = () => {
    if (isSidebarOpen) {
      return (
        <div
          className="fixed bg-black left-0 right-0 bottom-0 top-0 opacity-20"
          style={{ marginTop: "60px", zIndex: 999999999999999 }}
        ></div>
      );
    } else {
      return;
    }
  };

  return (
    <>
      {showOverlay()}
      <div
        className={cn(
          "bg-white fixed w-52 cool-transition shadow-main top-0 rounded-l-5xl",
          {
            "right-0": isSidebarOpen,
            "-right-full": !isSidebarOpen,
          }
        )}
        style={{ zIndex: 9999999999999999 }}
      >
        <SidebarHeader onCrossClick={onCrossClick} />
        <SidebarUtils />
        <SidebarLinks />
        <div className="w-full flex pb-5">
          <Link href="/login">
            <button className="w-full flex justify-center bg-transparent outline-none focus:outline-none text-sm">
              <SidebarLoginIcon />
              <span className="ml-2 mt-px">Logout</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

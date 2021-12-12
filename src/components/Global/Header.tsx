import React, { useState, useEffect } from "react";
import ActiveLink from "@/components/Global/ActiveLink";
import HeaderDropDown from "@/components/Global/HeaderDropDown";
import Link from "next/link";
import NotificationDropdown from "@/components/Global/NotificationDropdown";
import Sidebar from "@/components/Global/Sidebar/index";
import { useRouter } from "next/router";

interface LinksToRender {
  id: number;
  path: string;
  activeClass: string;
  linkText: string;
}

const Header: React.FC = () => {
  const [headerLinks, setHeaderLinks] = useState<LinksToRender[]>([
    {
      id: 1,
      path: "/",
      activeClass: "active-link",
      linkText: "Home",
    },
    {
      id: 2,
      path: "/talents",
      activeClass: "active-link",
      linkText: "Talents",
    },
    {
      id: 3,
      path: "/messages",
      activeClass: "active-link",
      linkText: "Messages",
    },
    {
      id: 4,
      path: "/opportunities",
      activeClass: "active-link",
      linkText: "Opportunities",
    },
    {
      id: 5,
      path: "/profile",
      activeClass: "active-link",
      linkText: "Profile",
    },
    {
      id: 6,
      path: "/team",
      activeClass: "active-link",
      linkText: "Team",
    },
  ]);

  const router = useRouter();

  let [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  let headerLink = headerLinks.map((link) => {
    return (
      <React.Fragment key={link.id}>
        <ActiveLink
          href={link.path}
          activeLinkClass={link.activeClass}
          linkText={link.linkText}
        ></ActiveLink>
      </React.Fragment>
    );
  });

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const sidebarResize = () => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    setHeaderLinks(headerLinks);

    sidebarResize();

    window.addEventListener("resize", () => {
      sidebarResize();
    });

    return window.removeEventListener("resize", () => {
      sidebarResize();
    });
  }, []);

  const goToMessages = () => {
    router.push("/messages");
  };

  return (
    <React.Fragment>
      {/* Header */}
      <header
        id="app-header"
        className="w-full md:px-6 pl-6 fixed top-0 py-0 border-b border-secondary-elements bg-white"
        style={{ zIndex: 99999999999999 }}
      >
        <div className="lg:hidden flex items-center py-4 pr-6">
          <div className="w-1/3">
            <Link href="/">
              <img src="/img/logo.svg" alt="" className="cursor-pointer" />
            </Link>
          </div>
          <div className="w-2/3 text-right flex items-center justify-end">
            <button
              className="bg-transparent outline-none focus:outline-none"
              onClick={goToMessages}
            >
              <img src="/img/icons/message-icon.svg" alt="" className="w-2/3" />
            </button>
            <NotificationDropdown />
            <button
              className="bg-transparent outline-none focus:outline-none"
              onClick={openSidebar}
            >
              <img src="/img/icons/hamburger-icon.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="lg:flex items-center hidden">
          <div className="w-1/5">
            <Link href="/">
              <img src="/img/logo.svg" alt="" className="cursor-pointer" />
            </Link>
          </div>
          <div className="w-3/5 text-center">
            <ul className="flex justify-center list-none">{headerLink}</ul>
          </div>
          <div className="w-1/5 flex items-center justify-end">
            <NotificationDropdown />
            <HeaderDropDown />
          </div>
        </div>
        <Sidebar onCrossClick={closeSidebar} isSidebarOpen={sidebarOpen} />
      </header>
      {/* Header ends */}
    </React.Fragment>
  );
};

export default Header;

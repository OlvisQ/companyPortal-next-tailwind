import React, { useEffect, useState } from "react";
import ActiveSidebarLink from "@/components/Global/Sidebar/ActiveSidebarLink";

interface LinksToRender {
  id: number;
  path: string;
  activeClass: string;
  linkText: string;
  icon?: any;
}

const SidebarLinks: React.FC = () => {
  const [headerLinks, setHeaderLinks] = useState<LinksToRender[]>([
    {
      id: 1,
      path: "/",
      activeClass: "active-sidebar-link",
      linkText: "Home",
      icon: "Home",
    },
    {
      id: 2,
      path: "/talents",
      activeClass: "active-sidebar-link",
      linkText: "Talents",
      icon: "Talents",
    },
    {
      id: 3,
      path: "/messages",
      activeClass: "active-sidebar-link",
      linkText: "Messages",
      icon: "Messages",
    },
    {
      id: 4,
      path: "/opportunities",
      activeClass: "active-sidebar-link",
      linkText: "Opportunities",
      icon: "Opportunities",
    },
    {
      id: 5,
      path: "/profile",
      activeClass: "active-sidebar-link",
      linkText: "Profile",
      icon: "Profile",
    },
    {
      id: 6,
      path: "/team",
      activeClass: "active-sidebar-link",
      linkText: "Team",
      icon: "Team",
    },
  ]);

  useEffect(() => {
    setHeaderLinks(headerLinks);
  }, []);

  const sidebarLink = headerLinks.map((link) => {
    return (
      <React.Fragment key={link.id}>
        <ActiveSidebarLink
          href={link.path}
          activeLinkClass={link.activeClass}
          linkText={link.linkText}
          icon={link.icon}
        ></ActiveSidebarLink>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="flex items-center flex-wrap py-5">
        <div className="w-full flex flex-wrap items-center">{sidebarLink}</div>
      <div className="w-full h-px bg-secondary-elements mx-5 mt-4"></div>
      </div>
    </>
  );
};

export default SidebarLinks;

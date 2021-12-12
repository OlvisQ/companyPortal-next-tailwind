import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import SidebarHomeIcon from "@/components/Global/Sidebar/SidebarHomeIcon";
import SidebarTalentIcon from "@/components/Global/Sidebar/SidebarTalentIcon";
import SidebarMesssageIcon from "@/components/Global/Sidebar/SidebarMessageIcon";
import SidebarOppIcon from "@/components/Global/Sidebar/SidebarOppIcon";
import SidebarProfileIcon from "@/components/Global/Sidebar/SidebarProfileIcon";
import SidebarTeamIcon from "@/components/Global/Sidebar/SidebarTeamIcon";

type Props = {
  activeLinkClass?: string;
  linkText?: string;
  href: string;
  icon?: any;
};

const ActiveLink: React.FC<Props> = ({
  activeLinkClass,
  linkText,
  href,
  icon,
}: Props) => {
  const router = useRouter();

  const renderLinkIcon = () => {
    switch (icon) {
      case "Home":
        return <SidebarHomeIcon classNames="ml-5 mr-4"/>;

      case "Talents":
        return <SidebarTalentIcon classNames="ml-5 mr-4"/>;

      case "Messages":
        return <SidebarMesssageIcon classNames="ml-5 mr-4"/>;

      case "Opportunities":
        return <SidebarOppIcon classNames="ml-5 mr-4"/>;

      case "Profile":
        return <SidebarProfileIcon classNames="ml-5 mr-4"/>;

      case "Team":
        return <SidebarTeamIcon classNames="ml-5 mr-4"/>;

      default:
        return null;
    }
  };

  if (href === router.pathname) {
    return (
      <Link href={href}>
        <li className={cn("flex items-center w-full my-2 text-primary", activeLinkClass)}>
          {renderLinkIcon()}
          <a className="text-titles cursor-pointer">{linkText}</a>
        </li>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <div className="flex items-center w-full my-2 text-secondary">
          {renderLinkIcon()}
          <a className="cursor-pointer">{linkText}</a>
        </div>
      </Link>
    );
  }
};

export default ActiveLink;

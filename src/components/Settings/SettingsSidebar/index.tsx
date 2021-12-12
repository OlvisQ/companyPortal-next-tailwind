import React, { ReactChild, useEffect, useState } from "react";
import * as SidebarIcons from "@/components/Settings/SettingsSidebar/SidebarIcons";
import { connect } from "react-redux";
import cn from "classnames";
import * as actions from "@/redux/actions/profileViewActions";

interface CPFromRedux {
  store: {
    settingsOrder: number;
  };
}

interface LinksInterface {
  id: number;
  icon: ReactChild;
  text: string;
  isActive: boolean;
}

type Props = {
  settingsOrder: number;
  changeSettingsOrder: (arg: number) => void;
};

const SettingsSidebar: React.FC<Props> = ({
  settingsOrder,
  changeSettingsOrder,
}) => {
  const [numberOfLinks, setNumberOfLinks] = useState<LinksInterface[]>([
    {
      id: 1,
      icon: <SidebarIcons.ProfileIcon />,
      text: "Profile",
      isActive: true,
    },
    {
      id: 2,
      icon: <SidebarIcons.PasswordIcon />,
      text: "Password",
      isActive: false,
    },
    {
      id: 3,
      icon: <SidebarIcons.NotificationsIcon />,
      text: "Notifications",
      isActive: false,
    },
    {
      id: 4,
      icon: <SidebarIcons.CreditCardIcon />,
      text: "Payment Methods",
      isActive: false,
    },
    {
      id: 5,
      icon: <SidebarIcons.HistoryIcon />,
      text: "Payment History",
      isActive: false,
    },
    {
      id: 6,
      icon: <SidebarIcons.AboutIcon />,
      text: "About",
      isActive: false,
    },
    {
      id: 7,
      icon: <SidebarIcons.HelpIcon />,
      text: "Help",
      isActive: false,
    },
    {
      id: 8,
      icon: <SidebarIcons.PrivacyIcon />,
      text: "Privacy & Policy",
      isActive: false,
    },
    {
      id: 9,
      icon: <SidebarIcons.TermsIcon />,
      text: "Terms & Conditions",
      isActive: false,
    },
  ]);

  const changeActiveLink = (index: number) => {
    const newLinks = [...numberOfLinks];

    newLinks.forEach((link: LinksInterface) => {
      link.isActive = false;
    });

    newLinks[index].isActive = true;

    setNumberOfLinks(newLinks);
  };

  const changeSettingsView = (index: number) => {
    changeActiveLink(index);
    changeSettingsOrder(index);
  };

  useEffect(() => {
    changeActiveLink(settingsOrder);
  }, []);

  const renderNumberOfLinks = numberOfLinks.map(
    (link: LinksInterface, index: number) => {
      return (
        <React.Fragment key={link.id}>
          <div className="w-full mb-10">
            <button
              className={cn(
                "flex items-center outline-none focus:outline-none bg-transparent",
                {
                  "active-settings-link": link.isActive,
                  "text-secondary": !link.isActive,
                }
              )}
              onClick={() => changeSettingsView(index)}
            >
              <div className="ml-4 mr-3">{link.icon}</div>
              <div className="mt-1">
                <p
                  className={cn({
                    "text-titles": link.isActive,
                    "text-secondary": !link.isActive,
                  })}
                >
                  {link.text}
                </p>
              </div>
            </button>
          </div>
        </React.Fragment>
      );
    }
  );

  return (
    <>
      <div className="flex flex-wrap">{renderNumberOfLinks}</div>
    </>
  );
};

const mapStateToProps = (state: CPFromRedux) => ({
  settingsOrder: state.store.settingsOrder,
});

const mapDispatchToProps = {
  changeSettingsOrder: actions.changeProfileSettingsOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsSidebar);

import React, { useState, useEffect, ReactNode } from "react";
import {
  ProfileIcon,
  PasswordIcon,
  NotificationsIcon,
  CreditCardIcon,
  HistoryIcon,
  AboutIcon,
  HelpIcon,
  PrivacyIcon,
  TermsIcon,
} from "@/components/Settings/SettingsSidebar/SidebarIcons";
import ProfileSettings from "@/components/Settings/SettingsView/ProfileSettings";
import PasswordSettings from "@/components/Settings/SettingsView/PasswordSettings";
import NotificationSettings from "@/components/Settings/SettingsView/NotificationSettings";
import PaymentSettings from "@/components/Settings/SettingsView/PaymentSettings";
import PaymentHistorySettings from "@/components/Settings/SettingsView/PaymentHistorySettings";
import AboutSettings from "@/components/Settings/SettingsView/AboutSettings";
import HelpSettings from "@/components/Settings/SettingsView/HelpSettings";
import PrivacySettings from "@/components/Settings/SettingsView/PrivacySettings";
import TermsSettings from "@/components/Settings/SettingsView/TermsSettings";
import Panel from "@/components/Global/Panel";

interface IMobSettings {
  id: string | number;
  title: string;
  icon: ReactNode;
  component: ReactNode;
}

const MobSettingView: React.FC = () => {
  const [settingsPanels, setSettingsPanel] = useState<IMobSettings[]>([
    {
      id: 1,
      title: "Profile",
      icon: <ProfileIcon />,
      component: <ProfileSettings />,
    },
    {
      id: 2,
      title: "Password",
      icon: <PasswordIcon />,
      component: <PasswordSettings />,
    },
    {
      id: 3,
      title: "Notifications",
      icon: <NotificationsIcon />,
      component: <NotificationSettings />,
    },
    {
      id: 4,
      title: "Payment Methods",
      icon: <CreditCardIcon />,
      component: <PaymentSettings />,
    },
    {
      id: 5,
      title: "Payment History",
      icon: <HistoryIcon />,
      component: <PaymentHistorySettings />,
    },
    {
      id: 6,
      title: "About",
      icon: <AboutIcon />,
      component: <AboutSettings />,
    },
    {
      id: 7,
      title: "Help",
      icon: <HelpIcon />,
      component: <HelpSettings />,
    },
    {
      id: 8,
      title: "Privacy & Policy",
      icon: <PrivacyIcon />,
      component: <PrivacySettings />,
    },
    {
      id: 8,
      title: "Terms & Conditions",
      icon: <TermsIcon />,
      component: <TermsSettings />,
    },
  ]);

  useEffect(() => {
    setSettingsPanel(settingsPanels);
  }, []);

  const renderSettingsPanel = settingsPanels.map((panel: IMobSettings) => {
    return (
      <React.Fragment key={panel.id}>
        <Panel icon={panel.icon} title={panel.title}>
          {panel.component}
        </Panel>
      </React.Fragment>
    );
  });

  return <>{renderSettingsPanel}</>;
};

export default MobSettingView;

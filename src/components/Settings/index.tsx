import React from "react";
import { connect } from "react-redux";
import ProfileSettings from "@/components/Settings/SettingsView/ProfileSettings";
import PasswordSettings from "@/components/Settings/SettingsView/PasswordSettings";
import NotificationSettings from "@/components/Settings/SettingsView/NotificationSettings";
import PaymentSettings from "@/components/Settings/SettingsView/PaymentSettings";
import PaymentHistorySettings from "@/components/Settings/SettingsView/PaymentHistorySettings";
import AboutSettings from "@/components/Settings/SettingsView/AboutSettings";
import HelpSettings from "@/components/Settings/SettingsView/HelpSettings";
import PrivacySettings from "@/components/Settings/SettingsView/PrivacySettings";
import TermsSettings from "@/components/Settings/SettingsView/TermsSettings";

interface CPFromRedux {
  store: {
    settingsOrder: number;
  };
}

type Props = {
  settingsOrder: number;
};

const AccountSettings: React.FC<Props> = ({ settingsOrder }) => {
  const renderSettingOptions = () => {
    switch (settingsOrder) {
      case 0:
        return (
          <>
            <ProfileSettings />
          </>
        );

      case 1:
        return (
          <>
            <PasswordSettings />
          </>
        );

      case 2:
        return (
          <>
            <NotificationSettings />
          </>
        );

      case 3:
        return (
          <>
            <PaymentSettings />
          </>
        );

      case 4:
        return (
          <>
            <PaymentHistorySettings />
          </>
        );

      case 5:
        return (
          <>
            <AboutSettings />
          </>
        );

      case 6:
        return (
          <>
            <HelpSettings />
          </>
        );

      case 7:
        return (
          <>
            <PrivacySettings />
          </>
        );

      case 8:
        return (
          <>
            <TermsSettings />
          </>
        );

      default:
        return <div>{null}</div>;
    }
  };

  return <>{renderSettingOptions()}</>;
};

const mapStateToProps = (state: CPFromRedux) => ({
  settingsOrder: state.store.settingsOrder,
});

export default connect(mapStateToProps)(AccountSettings);

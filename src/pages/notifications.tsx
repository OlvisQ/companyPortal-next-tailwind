import React from "react";
import Layout from "@/components/layouts/Layout";
import Notifications from "@/components/Notifications";

const NotificationsPage: React.FC = () => {
  return (
    <>
      <Layout title="Notifications | GetHired">
        <Notifications />
      </Layout>
    </>
  );
};

export default NotificationsPage;

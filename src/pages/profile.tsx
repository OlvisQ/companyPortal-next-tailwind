import React from "react";
import Layout from "@/components/layouts/Layout";
import Profile from "@/components/Profile";

const ProfilePage: React.FC = () => {
  return (
    <Layout title="Profile | Gethired Company">
      <Profile />
    </Layout>
  );
};

export default ProfilePage;

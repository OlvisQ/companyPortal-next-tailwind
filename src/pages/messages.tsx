import React from "react";
import Layout from "@/components/layouts/Layout";
import Messages from "@/components/Messages/index";

const MessagesPage: React.FC = () => {
  return (
    <Layout title="Messages | Next.js + TypeScript Example">
      <div
        className="lg:h-screen h-full overflow-hidden"
        style={{ paddingTop: "4.5rem" }}
      >
        <Messages />
      </div>
    </Layout>
  );
};

export default MessagesPage;

import DashboardPage from "@/components/Dashboard/Dashboard";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const dashboard = () => {
  return (
    <div>
      <DashboardPage></DashboardPage>
    </div>
  );
};

export default dashboard;

dashboard.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};

import CourseCatalogPage from "@/components/CourseCatalog/CourseCatalog";
import RootLayout from "@/components/Layout/RootLayout";
import React from "react";

const courseCatalog = () => {
  return (
    <div>
      <CourseCatalogPage></CourseCatalogPage>
    </div>
  );
};

export default courseCatalog;

courseCatalog.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};

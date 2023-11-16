import RootLayout from "@/components/Layout/RootLayout";
import {
  useGetAllCourseCatalogsQuery,
  useGetSingleCourseCatalogQuery,
} from "@/redux/features/courseCatalog/courseCatalogApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NestedPage = () => {
  const router = useRouter();

  const id = router.query.id;

  const { data, isLoading } = useGetSingleCourseCatalogQuery(id);

  const courseCatalogData = data?.data;

  return (
    <div className="max-w-[1440px] mx-auto px-5 my-10">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Course Details Page
      </h2>
      <div className="lg:w-[50%] mx-auto">
        <div className=" bg-slate-200 p-4 rounded-lg hover:shadow-2xl">
          <div className="">
            <Image
              className="w-full h-52"
              src={courseCatalogData?.imgUrl}
              width={500}
              height={500}
              alt="Picture of the logo"
            />
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Course Name:{" "}
              <span className=" font-normal"> {courseCatalogData?.name}</span>
            </h2>
            <h2 className="text-lg font-semibold mt-2">
              Course Title:
              <span className=" font-normal"> {courseCatalogData?.title}</span>
            </h2>
            <h2 className="text-lg font-semibold mt-2">
              Instructor Name:
              <span className=" font-normal">
                {" "}
                {courseCatalogData?.instructor}
              </span>
            </h2>
            <h2 className="text-lg font-semibold mt-2">
              Course Price:
              <span className=" font-normal">
                {" "}
                {courseCatalogData?.course_price}
              </span>
            </h2>
            <h2 className="text-lg font-semibold mt-2">
              Rating:
              <span className=" font-normal"> {courseCatalogData?.rating}</span>
            </h2>
            <h2 className="text-lg font-semibold mt-2">
              Details:
              <span className=" font-normal">
                {" "}
                {courseCatalogData?.details}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedPage;

NestedPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};

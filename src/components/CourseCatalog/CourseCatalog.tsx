import { useGetAllCourseCatalogsQuery } from "@/redux/features/courseCatalog/courseCatalogApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseCatalogPage = () => {
  const { data, isLoading } = useGetAllCourseCatalogsQuery({});

  const courseCatalogData = data?.data;

  return (
    <div className="max-w-[1440px] mx-auto px-5 my-20">
      <h2 className="text-4xl font-semibold mb-8 text-center">
        Course Catalogs
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {courseCatalogData?.map((data: any) => (
          <Link href={`/courseCatalog/${data?._id}`} key={data?._id}>
            <div className=" bg-slate-200 p-4 rounded-lg hover:shadow-2xl">
              <Image
                className="w-full h-52"
                src={data?.imgUrl}
                width={500}
                height={500}
                alt="Picture of the logo"
              />
              <h2 className="text-lg font-semibold mt-4 text-center">
                {data?.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalogPage;

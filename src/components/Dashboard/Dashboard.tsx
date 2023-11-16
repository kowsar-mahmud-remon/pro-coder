import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCreateCourseCatalogMutation } from "@/redux/features/courseCatalog/courseCatalogApi";
import { getUserInfo } from "@/services/auth.service";

const DashboardPage = () => {
  const userInfo: any = getUserInfo();
  const role = userInfo.role;

  const [CreateCourseCatalog, { data }] = useCreateCourseCatalogMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm();

  // console.log(isLoggedIn());

  const onSubmit = async (data: any) => {
    try {
      const userData = {
        name: data?.name,
        title: data?.title,
        imgUrl: data?.imgUrl,
        instructor: data?.instructor,
        details: data?.details,
        rating: Number(data?.rating),
        course_price: Number(data?.course_price),
      };

      const res = await CreateCourseCatalog(userData);

      console.log("res", res?.data?.statusCode);

      if (res?.data?.statusCode === 200) {
        router.push("/courseCatalog");
        toast.success("Successfully Create Course!");
      }
    } catch (err: any) {
      console.error(err.message);
      toast.error("Course Created failed");
    }
  };

  if (role === "admin") {
    return (
      <div className="bg-secondary rounded-lg p-10 text-white lg:w-[40%] lg:mx-auto my-20 mx-5">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-center font-semibold text-2xl">
              Create Course
            </h3>
            <hr />

            <div className="lg:flex gap-4">
              <div className=" mt-4">
                <label htmlFor="">Course Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter course name"
                  className="input input-bordered w-full text-black"
                  {...register("name", { required: true })}
                />
              </div>

              <div className=" mt-4">
                <label htmlFor="">Course Title</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter course title"
                  className="input input-bordered w-full text-black"
                  {...register("title", { required: true })}
                />
              </div>
            </div>

            <div className="lg:flex gap-4">
              <div className=" mt-4">
                <label htmlFor="">Course Image Url</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter imgUrl here"
                  className="input input-bordered w-full text-black"
                  {...register("imgUrl", { required: true })}
                />
              </div>

              <div className=" mt-4">
                <label htmlFor="">Course Instructor Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter instructor name"
                  className="input input-bordered w-full text-black"
                  {...register("instructor", { required: true })}
                />
              </div>
            </div>

            <div className="lg:flex gap-4">
              <div className=" mt-4">
                <label htmlFor="">Course course_price</label>
                <br />
                <input
                  type="number"
                  placeholder="Enter price"
                  className="input input-bordered w-full text-black"
                  {...register("course_price", { required: true })}
                />
              </div>

              <div className=" mt-4">
                <label htmlFor="">Course rating</label>
                <br />
                <input
                  type="number"
                  placeholder="Enter rating"
                  className="input input-bordered w-full text-black"
                  {...register("rating", { required: true })}
                />
              </div>
            </div>

            <div className=" mt-4">
              <label htmlFor="">Course details</label>
              <br />
              <input
                type="text"
                placeholder="Enter details"
                className="input input-bordered w-full text-black"
                {...register("details", { required: true })}
              />
            </div>

            <div className="flex justify-center mt-4">
              <button className="border rounded px-4 py-1" type="submit">
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="text-4xl mt-20 text-center text-red-500 font-bold">
      <h2>Only Admin Access This Page</h2>
    </div>
  );
};

export default DashboardPage;

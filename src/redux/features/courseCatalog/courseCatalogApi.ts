import { api } from "../../api/apiSlice";

const courseCatalogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllCourseCatalogs: build.query({
      query: () => "/courseCatalog",
      providesTags: ["courseCatalog"],
    }),

    getSingleCourseCatalog: build.query({
      query: (id: any) => `/courseCatalog/${id}`,
      providesTags: ["courseCatalog"],
    }),

    createCourseCatalog: build.mutation({
      query: (data: any) => ({
        url: `/courseCatalog/create-courseCatalog`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courseCatalog"],
    }),

    deleteCourseCatalog: build.mutation({
      query: (id: any) => ({
        url: `/courseCatalog/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["courseCatalog"],
    }),

    updateCourseCatalog: build.mutation({
      query: ({ id, data }: any) => ({
        url: `/courseCatalog/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["courseCatalog"],
    }),
  }),
});

export const {
  useGetAllCourseCatalogsQuery,
  useGetSingleCourseCatalogQuery,
  useCreateCourseCatalogMutation,
  useDeleteCourseCatalogMutation,
  useUpdateCourseCatalogMutation,
} = courseCatalogApi;

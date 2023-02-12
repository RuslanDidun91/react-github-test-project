import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<any, string>({
      query: (search: string) => ({
        url: "search/user",
        params: {
          q: search,
        },
      }),
    }),
  }),
});

//custom hook 
export const {useSearchUsersQuery} = githubApi;
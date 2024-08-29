"use client";

import {
  useGetUserbyIdQuery,
  useGetUsersQuery,
} from "@/redux/services/userAPI";

const page = () => {
  const { data, error, isLoading, isFetching } = useGetUsersQuery();

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      <div className="container mx-auto">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-5xl font-extrabold text-center my-10">Users</h2>
          <div className="grid grid-cols-1 bg-zinc-950 p-5 mt-10 shadow-2xl shadow-slate-800">
            {data?.map((user) => (
              <div key={user.id} className="w-full max-w-sm">
                <div className="p-2 my-2 w-full font-bold">{user.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

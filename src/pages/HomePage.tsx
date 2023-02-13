import { useSearchUsersQuery } from "../store/github/github.api";
import { useState } from "react"; 


export const HomePagee = () => {

  const [search, seetSearch] = useState('');
  const { isLoading, isError, data } = useSearchUsersQuery('Ruslan');

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Smth went wrong</p>}
      <div className="relative w-[560px]">
        <input
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search username"
          type="text" 
          value={search}
          onChange={(e) => seetSearch(e.target.value)}
          />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          test
        </div>
      </div>
    </div>
  );
}
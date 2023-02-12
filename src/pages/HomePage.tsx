import { useSearchUsersQuery } from "../store/github/github.api";


export const HomePagee = () => {

  const {isLoading, isError, data} = useSearchUsersQuery('Ruslan');

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
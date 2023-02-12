import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <Link to='/' className="mr-10">Home</Link>
        <Link to='/favouritess'>Favourites</Link>
      </span>
    </nav>
  )
}
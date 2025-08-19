import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import cart from "../assets/cart.png";
import user from "../assets/user.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim() === "") {
      navigate(location.pathname);
    } else {
      navigate(`${location.pathname}?search=${encodeURIComponent(search)}`);
    }
    const query = new URLSearchParams();
    if (search) query.set("search", search);
    navigate(`/?${query.toString()}`);
  };
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("search") || "");
  }, [location.search]);

  return (
    <nav className="sticky top-0 z-50 bg-blue-300 rounded-b-[10px] p-2 lg:p-3 shadow-md flex flex-col lg:flex-row items-start lg:items-center gap-4">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <p className="text-white text-xl font-bold">🛒 Gromouse</p>
        <div className="flex gap-3 lg:hidden">
          <Link to="/login">
            <img
              src={cart}
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition"
            />
          </Link>
          <Link to="/login">
            <img
              src={user}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition"
            />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSearch} className="relative w-full lg:w-[300px]">
        <input
          type="search"
          placeholder="Search for Grocery, Stores, Vegetable or Meat"
          className="bg-white w-full py-2 pl-4 pr-12 rounded-full border border-gray-300 focus:outline-none placeholder:text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 w-full lg:w-auto lg:ml-auto">
        <p className="text-sm text-white lg:text-base">
          ⚡ Order now and get it within
          <span className="text-yellow-300 font-semibold"> 15 min!</span>
        </p>
        <div className="hidden lg:flex gap-3">
          <Link to="/cart">
            <img
              src={cart}
              alt="Cart"
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition"
            />
          </Link>
          <Link to="/login">
            <img
              src={user}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer hover:scale-105 transition"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

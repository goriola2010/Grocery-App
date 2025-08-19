import Navbar from "../layouts/Navbar";
import Cardlist from "../components/card.tsx";
import ItemList from "../components/items.tsx";
import Weekly from "../components/weekly-items.tsx";
import ForYouList from "../components/for-you-items.tsx";
import Footer from "../layouts/Footer.tsx";
import { Link } from "react-router-dom";

function Heropage() {
  return (
    <>
      <Navbar />
      <main
        className="bg-blue-300 h-[55vh] m-5"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
        }}
      >
        <div className="flex items-center justify-between h-full px-10">
          <div className="text-white max-w-md pb-20">
            <h1 className="font-bold text-4xl leading-tight mb-4">
              We bring the store <br /> to your door
            </h1>
            <p className="text-lg mb-6">
              Get organic products and sustainably sourced <br />
              groceries delivered at up to 4% off grocery
            </p>
            <Link to="/login">
              <button
                className="bg-yellow-200 text-blue-700 font-semibold px-6 py-2 rounded-[8px] 
              shadow-md hover:bg-blue-100 transition"
              >
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </main>

      <Cardlist />
      <p className="text-[#013220] text-2xl m-5 font-bold">
        Weekly best selling items
      </p>
      <ItemList />
      <Weekly />
      <p className="text-[#013220] text-2xl m-5 font-bold">Just for you</p>
      <ForYouList />
      <Footer />
      <ul className="flex justify-between text-gray-600 text-sm p-10">
        <li>Become Seller</li>
        <li>
          <i className="fa-solid fa-gift bg-pink-600"></i> Gift Cards
        </li>
        <li>Help Center</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>&copy; Itadori 2025</li>
      </ul>
    </>
  );
}

export default Heropage;

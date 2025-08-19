import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const items = [
  {
    image: "",
    name: "Organic frozen",
    type: "deer",
    gram: "500 gm",
    price: "14.29$",
  },
  {
    image: "",
    name: "Fresh Coral",
    type: "frozen fish",
    gram: "500 gm",
    price: "18.29$",
  },
  {
    image: "",
    name: "Bonduelle",
    type: "royal mix",
    gram: "500 gm",
    price: "20.29$",
  },
  {
    image: "",
    name: "Frozen",
    type: "boneless meat",
    gram: "500 gm",
    price: "08.29$",
  },
  {
    image: "",
    name: "Halal frozen",
    type: "Chicken",
    gram: "500 gm",
    price: "15.29$",
  },
  {
    image: "",
    name: "Badhakopi",
    type: "(Local Cabbage)",
    gram: "500 gm",
    price: "17.29$",
  },
  {
    image: "",
    name: "Deshi Gajor",
    type: "(Local Carrot)",
    gram: "500 gm",
    price: "19.29$",
  },
  {
    image: "",
    name: "Dashi Shosha",
    type: "(Local Cucumb)",
    gram: "500 gm",
    price: "04.29$",
  },
  {
    image: "",
    name: "Beetroot",
    type: "(Local Shop)",
    gram: "500 gm",
    price: "17.29$",
  },
  {
    image: "",
    name: "Italian Avocado",
    type: "(Local Shop)",
    gram: "500 gm",
    price: "14.29$",
  },
  {
    image: "",
    name: "Lays Chips",
    type: "(Bacon)",
    gram: "500 gm",
    price: "21.29$",
  },
  {
    image: "",
    name: "Plant Hunter",
    type: "(Frozen Pack)",
    gram: "500 gm",
    price: "20.29$",
  },
  {
    image: "",
    name: "Chicken penne",
    type: "with basil",
    gram: "500 gm",
    price: "14.29$",
  },
];

function Weekly() {
  const [selectedCategory, setSelectedCategory] = useState("Frozen food");

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search")?.toLowerCase() || "";
  const getVisibleItems = () => {
    if (selectedCategory === "Frozen food") return items.slice(0, 5);
    if (selectedCategory === "Vegetables") return items.slice(5, 10);
    if (selectedCategory === "Snacks") return items.slice(10, 15);
    return [];
  };
  const visibleItems = getVisibleItems();
  const filteredItems = visibleItems.filter(
    (item) =>
      item.name.toLowerCase().includes(search) ||
      item.type.toLowerCase().includes(search)
  );
  return (
    <div className="m-5" id="weekly">
      <div className="flex justify-between items-center mb-4 px-5">
        <p className="text-[#013220] text-2xl font-bold">
          Gromouse/All category
        </p>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-[#013220] text-[#013220] rounded-full px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#013220]"
        >
          {[
            "Frozen food",
            "Vegetables",
            "Snacks",
            "Chicken",
            "Dairy & Milk",
            "Chocolate",
            "Fruits",
          ].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-6">
          No items yet.
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + search}
            className="overflow-x-auto sm:overflow-x-visible hide-scrollbar"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6 mt-6">
              {filteredItems.map((item, index) => (
                <div key={index} className="min-w-[220px] sm:min-w-0">
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

function ItemCard({ item }) {
  const [count, setCount] = useState(0);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="m-5 relative bg-gray-200 shadow-md rounded-xl p-4 flex flex-col items-center space-y-3 transition-transform hover:scale-105">
      <div className="w-24 h-24">
        <img src={item.image} className="object-contain w-full h-full" />
      </div>
      <div className="text-center space-y-1">
        <h3 className="font-bold text-lg text-[#013220]">{item.name}</h3>
        <p className="text-[#013220]">{item.type}</p>
        <p className="text-sm text-gray-400">{item.gram}</p>
        <p className="text-lg font-bold text-[#013220]">{item.price}</p>
      </div>

      <div className="w-full px-4 py-2 bg-gray-200 rounded-md flex justify-between items-center">
        {!showControls ? (
          <button
            onClick={() => {
              setShowControls(true);
              setCount(1);
            }}
            className="mx-auto font-bold text-2xl text-black rounded-full cursor-pointer"
          >
            +
          </button>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                if (count === 1) {
                  setShowControls(false);
                  setCount(0);
                } else {
                  setCount(count - 1);
                }
              }}
              className="px-2 py-1 font-bold border border-[#013220] text-2xl text-[#013220] rounded-full cursor-pointer"
            >
              -
            </button>
            <span className="font-bold text-[#013220]">{count}</span>
            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className="px-2 py-1 font-bold text-2xl border border-[#013220] text-[#013220] rounded-full cursor-pointer"
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
}
export default Weekly;

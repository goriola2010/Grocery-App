import { useState } from "react";
import { useLocation } from "react-router-dom";
import beetroot from "../assets/Beetroot.png";

const items = [
  {
    image: beetroot,
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
    price: "12.29$",
  },
  {
    image: "",
    name: "Szam amm",
    type: "(Process Food)",
    gram: "500 gm",
    price: "14.29$",
  },
  {
    name: "Beef Mixed",
    type: "(Cut Bone)",
    gram: "500 gm",
    price: "16.29$",
  },
  {
    image: "",
    name: "Cold drinks",
    type: "(Sprite)",
    gram: "500 gm",
    price: "18.29$",
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
    name: "Deshi Dajor",
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
    name: "Lays Chip",
    type: "(Bacon)",
    gram: "500 gm",
    price: "21.29$",
  },
  {
    image: "",
    name: "Badhakopi",
    type: "(Local Cabbage)",
    gram: "500 gm",
    price: "09.29$",
  },
];

function ItemList() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get("search")?.toLowerCase() || "";

  const filteredItems = search
    ? items.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.type.toLowerCase().includes(search)
      )
    : items;

  if (filteredItems.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg mt-6">
        No items match your search.
      </div>
    );
  }

  return (
    <div className="flex overflow-x-auto gap-4 p-4 hide-scrollbar sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {filteredItems.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

function Card({ item }) {
  const [count, setCount] = useState(0);
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="m-5 min-w-[220px] relative bg-gray-200 shadow-md rounded-xl p-4 flex flex-col items-center space-y-3 transition-transform hover:scale-105">
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
              className="px-3 py-1 font-bold border border-[#013220] text-2xl text-[#013220] rounded-full cursor-pointer"
            >
              -
            </button>

            <span className="font-bold text-[#013220]">{count}</span>

            <button
              type="button"
              onClick={() => setCount(count + 1)}
              className="px-3 py-1 font-bold text-2xl border border-[#013220] text-[#013220] rounded-full cursor-pointer"
            >
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ItemList;

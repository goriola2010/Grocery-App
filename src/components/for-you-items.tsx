import { useState } from "react";
const forYou = [
  {
    image: "",
    name: "Chicken Penne",
    type: "with basil",
    gram: "500 gm",
    price: "14.29$",
  },
  {
    image: "",
    name: "Chicken Onion",
    type: "rings",
    gram: "500 gm",
    price: "15.29$",
  },
  {
    image: "",
    name: "Pizza with ham and ",
    type: "mushrooms",
    gram: "500 gm",
    price: "18.29$",
  },
  {
    image: "",
    name: "Bucket of props",
    type: "and Drosed",
    gram: "500 gm",
    price: "08.29$",
  },
  {
    image: "",
    name: "Bonduelle",
    type: "royal mix",
    gram: "500 gm",
    price: "20.29$",
  },
];
function ForYouList() {
  return (
    <div className="overflow-x-auto sm:overflow-x-visible hide-scrollbar">
      <div className="flex gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6 p-4">
        {forYou.map((item, index) => (
          <div key={index} className="min-w-[220px] sm:min-w-0">
            <ForYouItems item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ForYouItems({ item }) {
  const [count, setCount] = useState(0);
  const [showControls, setShowControls] = useState(false);
  return (
    <div className="m-5 relative bg-gray-200 shadow-md rounded-xl p-4 flex flex-col items-center space-y-3 transition-transform hover:scale-105">
      <div className="w-24 h-24">
        <img src={item.image} className="object-cover w-full h-full" />
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
export default ForYouList;

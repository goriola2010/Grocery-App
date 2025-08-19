import chicken from "../assets/chicken.jpeg";
import bread from "../assets/bread and snacks.jpeg";
import vegetables from "../assets/vegetables.png";
import fruits from "../assets/fruits.png";
import milk from "../assets/milk and dairies.png";
const cards = [
  {
    name: "Vegetable",
    desc: "Local market",
    image: vegetables,
  },
  {
    name: "Snacks & Bread",
    desc: "In store delivery",
    image: bread,
  },
  {
    name: "Fruits",
    desc: "Comical free",
    image: fruits,
  },
  {
    name: "Chicken legs",
    desc: "Frozen Meal",
    image: chicken,
  },
  {
    name: "Milk and Dairy",
    desc: "Process food",
    image: milk,
  },
];
function Cardlist() {
  return (
    <div className="m-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-1">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-grey-300 shadow-md rounded-xl h-30 overflow-hidden hover:scale-105 transition transform duration-300"
        >
          <div className="absolute top-2 left-2 z-10">
            <h3 className="font-bold text-lg text-[#013220]">{card.name}</h3>
            <p className="text-sm text-grey">{card.desc}</p>
          </div>
          <div className="absolute bottom-2 right-2 w-15 h-15">
            <img
              src={card.image}
              className="object-cover w-full h-full rounded"
            />
          </div>
        </div>
      ))}
      <div className="w-40 flex items-center justify-center bg-[#d9f99d] text-white cursor-pointer rounded-xl h-30 hover:scale-105 transition transform duration-300">
        <div className="text-center flex flex-col items-center gap-2">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow">
            <a href="#weekly">
              <i className="fa-solid fa-arrow-right text-[#013220]"></i>
            </a>
          </div>
          <p className="text-sm opacity-70 text-[#013220]">See all</p>
        </div>
      </div>
    </div>
  );
}
export default Cardlist;

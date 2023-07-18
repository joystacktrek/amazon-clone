"use client";
import { Card } from "flowbite-react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const items = [
  {
    title: "Potato",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    button: "Add to Cart",
  },
];

const Deals = () => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-black">
  
    {items.map(({ title, image }) => (
        <Card key={title}>
          <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
          <img src={image} alt={title} />
          <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <button
              onClick={() => {
                const item = { id: new Date().getTime(), title };
                dispatch({
                  type: "add_item",
                  payload: item,
                });
              }}
            >
              Add to Cart
            </button>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default Deals
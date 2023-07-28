import { cartContext } from "@/global/context";
import { useContext } from "react";
import { BsCart2 } from "react-icons/bs";

const CartState = () => {
    let {state} = useContext(cartContext);
    console.log(state.cart)
  return (
    <div className="flex-shrink-0 w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center relative">
      <div className=" absolute top-1 right-2 rounded-full w-4 h-4 flex items-center justify-center bg-red-400 text-xs font-light">
        4
      </div>
      <BsCart2 size={24} />
    </div>
  );
};

export default CartState;
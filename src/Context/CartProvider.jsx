import { createContext, useContext, useReducer } from "react";
import { sumProducts } from "../helpers/helper";

const CartContext = createContext();
const initialState = {
  selectedItems: [],
  itemCounter: 0,
  totlal: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (
        !state.selectedItems.find((item) => {
          item.id === action.payload.id;
        })
      ) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        checkout: false,
        ...sumProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "CHECKOUTE":
      return {
        selectedItems: [],
        itemCounter: 0,
        total: 0,
        checkout: true,
      };
    case "INCREASE":
      const incIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[incIndex].quantity++;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE":
      const decIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decIndex].quantity--;
      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    default:
      throw new Error("Invalid Action!");
  }
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};
export { useCart };
export default CartProvider;

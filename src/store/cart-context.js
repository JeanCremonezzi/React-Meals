import { createContext } from "react";

// CartContext default value
const CartContext = createContext({
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (id) => {},
});

export default CartContext;

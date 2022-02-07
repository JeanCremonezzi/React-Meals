import { useReducer } from "react";

import CartContext from "./cart-context";

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return { items: [], totalAmount: 0 };
};

export const CartProvider = (props) => {
	const [cartState, cartDispatch] = useReducer(cartReducer, {
		items: [],
		totalAmount: 0,
	});

	const handleAddItem = (item) => {
		cartDispatch({ type: "ADD_ITEM", item: item });
	};

	const handleRemoveItem = (id) => {};

	const cartCtx = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: handleAddItem,
		removeItem: handleRemoveItem,
	};

	return (
		<CartContext.Provider value={cartCtx}>{props.children}</CartContext.Provider>
	);
};

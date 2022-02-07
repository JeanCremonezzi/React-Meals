import { useReducer } from "react";

import CartContext from "./cart-context";

const cartReducer = (state, action) => {
	if (action.type === "ADD_ITEM") {
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;

		const indexExistingItem = state.items.findIndex((item) => {
			return item.id === action.item.id;
		});

		const itemExists = state.items[indexExistingItem];

		let updatedItems;

		if (itemExists) {
			const itemToAdd = {
				...itemExists,
				amount: itemExists.amount + action.item.amount,
			};

			updatedItems = [...state.items];
			updatedItems[indexExistingItem] = itemToAdd;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
			totalAmount: Number(updatedTotalAmount),
		};
	}

	if (action.type === "REMOVE_ITEM") {
		const indexExistingItem = state.items.findIndex((item) => {
			return item.id === action.id;
		});

		const itemExists = state.items[indexExistingItem];

		const updatedTotalAmount = (state.totalAmount - itemExists.price).toFixed(2);

		let updatedItems;

		if (itemExists.amount === 1) {
			updatedItems = state.items.filter((item) => {
				return item.id !== action.id;
			});
		} else {
			const itemToUpdate = { ...itemExists, amount: itemExists.amount - 1 };
			updatedItems = [...state.items];
			updatedItems[indexExistingItem] = itemToUpdate;
		}

		return {
			items: updatedItems,
			totalAmount: Number(updatedTotalAmount),
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

	const handleRemoveItem = (id) => {
		cartDispatch({ type: "REMOVE_ITEM", id: id });
	};

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

import CartContext from "./cart-context";

export const CartProvider = (props) => {
	const handleAddItem = (item) => {};
	const handleRemoveItem = (id) => {};

	const cartCtx = {
		items: [],
		totalAmount: 0,
		addItem: handleAddItem,
		removeItem: handleRemoveItem,
	};

	return (
		<CartContext.Provider value={cartCtx}>{props.children}</CartContext.Provider>
	);
};

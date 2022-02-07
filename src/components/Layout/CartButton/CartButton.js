import { useContext } from "react";

import CartContext from "../../../store/cart-context";
import { CartIcon } from "../../Cart/CartIcon/CartIcon";

import styles from "./CartButton.module.css";

export const CartButton = (props) => {
	const ctxCart = useContext(CartContext);

	const amountCartItems = ctxCart.items.reduce((current, item) => {
		return current + item.amount;
	}, 0);

	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>

			<span>Your Cart</span>

			<span className={styles.badge}>{amountCartItems}</span>
		</button>
	);
};

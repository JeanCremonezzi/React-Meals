import { useContext, useEffect, useState } from "react";

import CartContext from "../../../store/cart-context";
import { CartIcon } from "../../Cart/CartIcon/CartIcon";

import styles from "./CartButton.module.css";

export const CartButton = (props) => {
	const [btnHighlighted, setBtnHighlighted] = useState(false);

	const ctxCart = useContext(CartContext);

	const amountCartItems = ctxCart.items.reduce((current, item) => {
		return current + item.amount;
	}, 0);

	const btnClasses = `${styles.button} ${btnHighlighted ? styles.bump : ""}`;

	useEffect(() => {
		if (ctxCart.items.length === 0) {
			return;
		}

		setBtnHighlighted(true);

		const identifier = setTimeout(() => {
			setBtnHighlighted(false);
		}, 300);

		return () => {
			clearTimeout(identifier);
		};
	}, [ctxCart.items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>

			<span>Your Cart</span>

			<span className={styles.badge}>{amountCartItems}</span>
		</button>
	);
};

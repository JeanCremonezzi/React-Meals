import { useContext } from "react";

import { Modal } from "../../UI/Modal/Modal";
import { CartItem } from "../CartItem/CartItem";
import CartContext from "../../../store/cart-context";

import styles from "./CartComponent.module.css";

export const CartComponent = (props) => {
	const ctxCart = useContext(CartContext);

	const handleRemoveItem = (id) => {
		ctxCart.removeItem(id);
	};

	const handleAddItem = (item) => {
		ctxCart.addItem({ ...item, amount: 1 });
	};

	const cartItems = (
		<ul className={styles["cart-items"]}>
			{ctxCart.items.map((item) => {
				return (
					<CartItem
						key={item.id}
						name={item.name}
						amount={item.amount}
						price={item.price}
						onRemove={handleRemoveItem.bind(null, item.id)}
						onAdd={handleAddItem.bind(null, item)}
					/>
				);
			})}
		</ul>
	);

	const formatedTotalAmount = `$${ctxCart.totalAmount.toFixed(2)}`;
	const hasItems = ctxCart.items.length > 0;

	return (
		<Modal onClick={props.onCartClick}>
			{cartItems}

			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{formatedTotalAmount}</span>
			</div>

			<div className={styles.actions}>
				<button onClick={props.onCartClick} className={styles["button--alt"]}>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

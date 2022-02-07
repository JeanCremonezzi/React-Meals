import { Modal } from "../../UI/Modal/Modal";

import styles from "./CartComponent.module.css";

export const CartComponent = (props) => {
	const cartItems = (
		<ul className={styles["cart-items"]}>
			{[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => {
				return <li key={item.id}>{item.name}</li>;
			})}
		</ul>
	);

	return (
		<Modal onClick={props.onCartClick}>
			{cartItems}

			<div className={styles.total}>
				<span>Total Amount</span>
				<span>12.99</span>
			</div>

			<div className={styles.actions}>
				<button onClick={props.onCartClick} className={styles["button--alt"]}>
					Close
				</button>
				<button className={styles.button}>Order</button>
			</div>
		</Modal>
	);
};

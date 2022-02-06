import { MealItemForm } from "../MealItemForm/MealItemForm";

import styles from "./MealItem.module.css";

export const MealItem = (props) => {
	const formatPrice = `$${props.price.toFixed(2)}`;

	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}>{formatPrice}</div>
			</div>

			<div>
				<MealItemForm id={props.id} />
			</div>
		</li>
	);
};

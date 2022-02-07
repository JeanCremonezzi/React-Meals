import { useRef, useState } from "react";

import CartContext from "../../../store/cart-context";
import { Input } from "../../UI/Input/Input";

import styles from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const inputAmount = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		const enteredAmount = +inputAmount.current.value;

		if (enteredAmount < 1) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmount);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<Input
				ref={inputAmount}
				label="Amount"
				input={{
					type: "number",
					id: `amount_${props.id}`,
					min: "0",
					step: "1",
					defaultValue: "0",
				}}
			/>

			<button type="submit">Add</button>

			{!amountIsValid && <p>Please enter a valid amount</p>}
		</form>
	);
};

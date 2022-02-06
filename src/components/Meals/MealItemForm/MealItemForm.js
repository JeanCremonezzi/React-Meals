import { Input } from "../../UI/Input/Input";

import styles from "./MealItemForm.module.css";

export const MealItemForm = (props) => {
	return (
		<form className={styles.form}>
			<Input
				label="Amount"
				input={{
					type: "number",
					id: `amount_${props.id}`,
					min: "0",
					step: "1",
					defaultValue: "0",
				}}
			/>

			<button>Add</button>
		</form>
	);
};

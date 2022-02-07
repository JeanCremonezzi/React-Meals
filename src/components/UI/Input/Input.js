import { forwardRef } from "react";

import styles from "./Input.module.css";

export const Input = forwardRef((props, ref) => {
	const handleKeyDown = (event) => {
		(event.key === "e" ||
			event.key === "." ||
			event.key === "-" ||
			event.key === "+") &&
			event.preventDefault();
	};

	return (
		<div className={styles.input}>
			<label htmlFor={props.input.id}> {props.label}</label>
			<input {...props.input} ref={ref} onKeyDown={handleKeyDown} />
		</div>
	);
});

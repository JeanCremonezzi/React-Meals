import styles from "./Header.module.css";

import { CartButton } from "../CartButton/CartButton";

import MealsImg from "../../../assets/meals.jpg";

export const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>React Meals</h1>
				<CartButton onClick={props.onCartClick} />
			</header>

			<div className={styles["main-image"]}>
				<img src={MealsImg} alt="A table full of delicious food!" />
			</div>
		</>
	);
};

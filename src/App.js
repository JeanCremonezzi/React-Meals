import { useState } from "react";
import { CartComponent } from "./components/Cart/CartComponent/CartComponent";

import { Header } from "./components/Layout/Header/Header";
import { Meals } from "./components/Meals/MealsComponent/MealsComponent";

function App() {
	const [cartIsOpen, setCartIsOpen] = useState(false);

	const handleCartIsOpen = () => {
		setCartIsOpen((prevState) => {
			return !prevState;
		});
	};

	return (
		<>
			{cartIsOpen && (
				<CartComponent onCartClick={handleCartIsOpen}></CartComponent>
			)}

			<Header onCartClick={handleCartIsOpen} />

			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;

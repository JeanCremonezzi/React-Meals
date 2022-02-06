import { Header } from "./components/Layout/Header/Header";
import { Meals } from "./components/Meals/MealsComponent/MealsComponent";

function App() {
	return (
		<>
			<Header />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;

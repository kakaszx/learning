import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Trocado Switch por Routes
import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Header } from './common-components/Header/Header';

export function App() {
	return (
		<>
			<NormalizeStyles />
			<BrowserRouter>
				<Header />
				<Routes> {/* Trocado de Switch para Routes */}
					{/* O componente agora vai dentro da propriedade 'element' como JSX */}
					<Route path="/detalhes/:id" element={<Details />} />
					<Route path="/" element={<Search />} />
					<Route path="*" element={<div>Página não encontrada</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
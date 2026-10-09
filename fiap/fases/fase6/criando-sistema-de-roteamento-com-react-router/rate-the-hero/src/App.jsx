import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Search } from './screens/Search.jsx';
import { Details } from './screens/Details.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
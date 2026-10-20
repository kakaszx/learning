import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Search } from './screens/Search'
import { Details } from './screens/Details'
import { NormalizeStyles } from './shared/NormalizeStyles'
import { Header } from './common-components/Header/Header'
import axios from 'axios'
import { configure } from 'axios-hooks'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SUPER_HERO_API_BASE_URL}/${import.meta.env.VITE_SUPER_HERO_API_KEY}`,
})

configure({ axios: axiosInstance })

export function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="/" element={<Search />} />
          <Route path="*" element={<div>Página não encontrada</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

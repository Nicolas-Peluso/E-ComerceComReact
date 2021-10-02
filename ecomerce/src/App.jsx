import React from 'react'
import Produto from './pages/Produto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from './components/Header'
import ProductDetail from './pages/ProductDetail'
import ErroPage from './pages/ErroPage'
import UserContext from './UserContext'
import Login from './components/login/Login'
import Pesquisa from './pages/Pesquisa'

function App() {
    const [ProductName, setProductName] = React.useState()
    function pro(product) {
        setProductName(product)
    }

    return (
        <BrowserRouter>
            <UserContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Produto value={pro} />} />
                    <Route path="/produto/:id" element={<ProductDetail ProductName={ProductName} />} />
                    <Route path="*" element={<ErroPage />} />
                    <Route path="login/*" element={<Login />} />
                    <Route path="/pesquisa/:id" element={<Pesquisa value={pro} />} />
                </Routes>
            </UserContext>
        </BrowserRouter>
    )
}

export default App
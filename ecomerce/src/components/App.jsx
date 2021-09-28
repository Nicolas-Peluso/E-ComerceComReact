import React from 'react'
import Produto from '../pages/Produto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css"
import Header from './Header'
import ProductDetail from '../pages/ProductDetail'
export const Context = React.createContext()


function App() {
    const [ProductName, setProductName] = React.useState()
    function pro(product) {
        setProductName(product)
    }
    return (
        <BrowserRouter>
            <Context.Provider value={{ produtoNome: ProductName }}>
                <Header />
                <Routes>
                    <Route path="/" element={<Produto value={pro} />} />
                    <Route path="/produto/:id" element={<ProductDetail />} />
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    )
}

export default App
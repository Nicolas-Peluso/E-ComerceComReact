import React from 'react'
import Produto from '../pages/Produto'
import { Router, Route } from 'react-router-dom'
import "./App.css"
import Header from './Header'
import ProductDetail from '../pages/ProductDetail'

function App() {
    return (
        <>
            <Router>
                <Header />
                <Route path="/" element={<Produto />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Router>
        </>
    )
}

export default App

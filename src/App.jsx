import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';

import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ProductRegistrationPage from './pages/ProductRegistrationPage.jsx';
import ClientsPage from './pages/ClientsPage.jsx';
import OrderRegistrationPage from './pages/OrderRegistrationPage.jsx';
import PaymentsPage from './pages/PaymentsPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (min-width: 768px) {
        font-size: 1.5em;
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-grow: 1;
`;

const MainContent = styled.main`
    flex-grow: 1;
    padding-top: 0;
    transition: margin-left 0.3s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <MainLayout>
                <Header onMenuToggle={toggleSidebar} />

                <ContentWrapper>
                    <Sidebar isOpen={isSidebarOpen} />

                    <MainContent isSidebarOpen={isSidebarOpen}>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/criar-conta" element={<RegisterPage />} />

                            <Route path="/dashboard" element={<DashboardPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/produtos" element={<ProductRegistrationPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/cadastro-produtos" element={<ProductRegistrationPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/pedidos" element={<DashboardPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/cadastro-pedido" element={<OrderRegistrationPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/pagamentos" element={<PaymentsPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/clientes" element={<ClientsPage isSidebarOpen={isSidebarOpen} />} />
                            <Route path="/relatorios" element={<ReportsPage isSidebarOpen={isSidebarOpen} />} />
                        </Routes>
                    </MainContent>
                </ContentWrapper>
            </MainLayout>
        </Router>
    );
}

export default App;
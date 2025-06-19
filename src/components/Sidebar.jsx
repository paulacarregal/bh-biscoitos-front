import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSidebar = styled.nav`
    background-color: #5C4033;
    width: ${props => props.isOpen ? '200px' : '0'};
    overflow: hidden;
    transition: width 0.3s ease-in-out;
    padding: ${props => props.isOpen ? '20px' : '0'};
    box-shadow: 2px 0 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    z-index: 999;
    padding-top: 80px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1em;

    &:hover {
        background-color: #A0522D;
    }
`;

const Icon = styled.span`
    font-size: 1.2em;
`;

function Sidebar({ isOpen }) {
    if (!isOpen) return null;

    return (
        <StyledSidebar isOpen={isOpen}>
            <NavLink to="/dashboard">
                <Icon>📊</Icon> Dashboard
            </NavLink>
            <NavLink to="/produtos">
                <Icon>🍪</Icon> Produtos
            </NavLink>
            <NavLink to="/cadastro-produtos">
                <Icon>➕</Icon> Cadastro de Produtos
            </NavLink>
            <NavLink to="/pedidos">
                <Icon>📝</Icon> Pedidos
            </NavLink>
            <NavLink to="/cadastro-pedido">
                <Icon>📋</Icon> Novo Pedido
            </NavLink>
            <NavLink to="/pagamentos">
                <Icon>💳</Icon> Pagamentos
            </NavLink>
            <NavLink to="/clientes">
                <Icon>👤</Icon> Clientes
            </NavLink>
            <NavLink to="/relatorios">
                <Icon>📈</Icon> Relatórios
            </NavLink>
            <NavLink to="/">
                <Icon>🚪</Icon> Sair
            </NavLink>
        </StyledSidebar>
    );
}

export default Sidebar;
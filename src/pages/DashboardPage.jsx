import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPedidosSimulados, getProdutosSimulados } from '../services/apiService';

const DashboardContainer = styled.div`
    padding: 20px;
    background-color: #f8f5f0;
    min-height: calc(100vh - 80px);
    margin-left: ${props => props.isSidebarOpen ? '200px' : '0'};
    transition: margin-left 0.3s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
`;

const StatCard = styled.div`
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    text-align: center;
`;

const StatTitle = styled.h3`
    color: #A0522D;
    font-size: 1.2em;
    margin-bottom: 10px;
`;

const StatValue = styled.p`
    font-size: 2.5em;
    font-weight: bold;
    color: #5C4033;
    margin: 0;
`;

const HistorySection = styled.div`
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
`;

const HistoryTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

    th, td {
        border: 1px solid #eee;
        padding: 12px 15px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
        color: #A0522D;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
`;


function DashboardPage({ isSidebarOpen }) {
    const [pedidosDoDia, setPedidosDoDia] = useState(0);
    const [maisVendido, setMaisVendido] = useState('');
    const [historicoPedidos, setHistoricoPedidos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pedidosResponse = await getPedidosSimulados();
                if (pedidosResponse.success) {
                    setPedidosDoDia(pedidosResponse.data.pedidosDoDia);
                    setMaisVendido(pedidosResponse.data.maisVendido);
                    setHistoricoPedidos(pedidosResponse.data.historicoPedidos);
                } else {
                    setError(pedidosResponse.message);
                }
            } catch (err) {
                setError('Erro ao carregar dados do dashboard.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <DashboardContainer isSidebarOpen={isSidebarOpen}>Carregando dashboard...</DashboardContainer>;
    if (error) return <DashboardContainer isSidebarOpen={isSidebarOpen}>Erro: {error}</DashboardContainer>;

    return (
        <DashboardContainer isSidebarOpen={isSidebarOpen}>
            <h1>Pedidos</h1>
            <StatsGrid>
                <StatCard>
                    <StatTitle>Pedidos do Dia:</StatTitle>
                    <StatValue>{pedidosDoDia}</StatValue>
                </StatCard>
                <StatCard>
                    <StatTitle>Mais Vendido:</StatTitle>
                    <StatValue>{maisVendido}</StatValue>
                </StatCard>
            </StatsGrid>

            <HistorySection>
                <StatTitle>Histórico de Pedidos:</StatTitle>
                <HistoryTable>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preço (KG/UND)</th>
                            <th>Data e Horário da Venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historicoPedidos.map((pedido, index) => (
                            <tr key={index}>
                                <td>{pedido.produto}</td>
                                <td>{pedido.quantidade}</td>
                                <td>R${pedido.preco.toFixed(2)}</td>
                                <td>{pedido.dataHora}</td>
                            </tr>
                        ))}
                    </tbody>
                </HistoryTable>
            </HistorySection>
        </DashboardContainer>
    );
}

export default DashboardPage;
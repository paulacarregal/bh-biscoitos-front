import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    padding: 20px;
    background-color: #f8f5f0;
    min-height: calc(100vh - 80px);
    margin-left: ${props => props.isSidebarOpen ? '200px' : '0'};
    transition: margin-left 0.3s ease-in-out;

    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const ReportsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
`;

const ReportCard = styled.div`
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
    font-size: 2em;
    font-weight: bold;
    color: #5C4033;
    margin: 0;
`;

const ChartContainer = styled.div`
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    margin-top: 20px;
    text-align: center;
`;

const ChartPlaceholder = styled.div`
    width: 100%;
    height: 200px;
    background-color: #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-style: italic;
    margin-top: 15px;
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

function ReportsPage({ isSidebarOpen }) {
    return (
        <PageContainer isSidebarOpen={isSidebarOpen}>
            <h1>Relatórios</h1>
            <ReportsGrid>
                <ReportCard>
                    <StatTitle>Pedidos no Mês:</StatTitle>
                    <StatValue>#300</StatValue>
                </ReportCard>
                <ReportCard>
                    <StatTitle>Semana com mais Vendas:</StatTitle>
                    <StatValue>08-15 de Maio</StatValue>
                </ReportCard>
                <ReportCard>
                    <StatTitle>Total Vendido:</StatTitle>
                    <StatValue>R$8.500,00</StatValue>
                </ReportCard>
            </ReportsGrid>

            <ChartContainer>
                <StatTitle>Vendas por Categorias</StatTitle>
                <ChartPlaceholder>
                    Gráfico de Barras (placeholder)
                </ChartPlaceholder>
            </ChartContainer>

            <ChartContainer>
                <StatTitle>Formas de Pagamento</StatTitle>
                <ChartPlaceholder>
                    Gráfico de Pizza (placeholder)
                </ChartPlaceholder>
            </ChartContainer>
        </PageContainer>
    );
}

export default ReportsPage;
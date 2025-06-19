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

const ContentBox = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const Title = styled.h2`
    color: #A0522D;
    margin-bottom: 25px;
`;

function PaymentsPage({ isSidebarOpen }) {
    return (
        <PageContainer isSidebarOpen={isSidebarOpen}>
            <h1>Pagamentos</h1>
            <ContentBox>
                <Title>Gestão de Pagamentos</Title>
                <p>Aqui você poderá visualizar e gerenciar os pagamentos.</p>
            </ContentBox>
        </PageContainer>
    );
}

export default PaymentsPage;
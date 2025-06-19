import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';

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

const FormWrapper = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    max-width: 700px;
    margin: 0 auto;
`;

const Title = styled.h2`
    color: #A0522D;
    margin-bottom: 25px;
    text-align: center;
`;

const ItemList = styled.ul`
    list-style: none;
    padding: 0;
    margin-top: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    background-color: #f9f9f9;
`;

const ListItem = styled.li`
    padding: 8px 0;
    border-bottom: 1px dashed #eee;
    &:last-child {
        border-bottom: none;
    }
`;

function OrderRegistrationPage({ isSidebarOpen }) {
    const [clientName, setClientName] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [selectedItems, setSelectedItems] = useState([
        'Biscoito de Polvilho', 'Bolo de Laranja', 'Pão de Grãos'
    ]);
    const [totalValue, setTotalValue] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleFinalizeOrder = () => {
        alert('Pedido finalizado (simulado)!');
    };

    return (
        <PageContainer isSidebarOpen={isSidebarOpen}>
            <h1>Cadastro de Pedido:</h1>
            <FormWrapper>
                <InputField label="Nome do Cliente" placeholder="Nome do cliente" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                <InputField label="Data" type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />
                <InputField label="Selecione os itens" placeholder="Buscar e selecionar produtos..." />

                <p>Itens Selecionados:</p>
                <ItemList>
                    {selectedItems.map((item, index) => (
                        <ListItem key={index}>{index + 1}. {item}</ListItem>
                    ))}
                </ItemList>

                <InputField label="Valor Total" type="number" placeholder="R$ 0,00" value={totalValue} onChange={(e) => setTotalValue(e.target.value)} />
                <InputField label="Forma de pagamento" placeholder="Cartão, Dinheiro, Pix..." value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} />

                <Button onClick={handleFinalizeOrder} style={{ width: '100%', marginTop: '20px' }}>Finalizar Pedido</Button>

                <Title style={{ marginTop: '40px' }}>Pedidos em Andamento</Title>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid #eee', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Cliente</th>
                            <th style={{ border: '1px solid #eee', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Pedido</th>
                            <th style={{ border: '1px solid #eee', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Valor</th>
                            <th style={{ border: '1px solid #eee', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Ações / Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>Ana Maria</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>#101</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>R$100,00</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>Recebi...</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>Augusto</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>#102</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>R$55,90</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>Em a...</td>
                        </tr>
                        <tr>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>Helena</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>#103</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>R$15,00</td>
                            <td style={{ border: '1px solid #eee', padding: '8px' }}>Con...</td>
                        </tr>
                    </tbody>
                </table>
            </FormWrapper>
        </PageContainer>
    );
}

export default OrderRegistrationPage;
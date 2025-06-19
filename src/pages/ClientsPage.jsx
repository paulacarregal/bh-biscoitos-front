import React from 'react';
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
    max-width: 600px;
    margin: 0 auto 30px auto;
`;

const Title = styled.h2`
    color: #A0522D;
    margin-bottom: 25px;
    text-align: center;
`;

function ClientsPage({ isSidebarOpen }) {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [endereco, setEndereco] = React.useState('');
    const [telefone, setTelefone] = React.useState('');

    const handleCadastrarCliente = () => {
        alert(`Cliente ${nome} cadastrado (simulado)!`);
    };

    return (
        <PageContainer isSidebarOpen={isSidebarOpen}>
            <h1>Clientes</h1>
            <FormWrapper>
                <Title>Cadastramento</Title>
                <InputField label="Nome Completo" placeholder="Nome completo do cliente" value={nome} onChange={(e) => setNome(e.target.value)} />
                <InputField label="Email" type="email" placeholder="email@exemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <InputField label="Endereço" placeholder="Rua, número, bairro, cidade" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                <InputField label="Telefone" placeholder="(XX) XXXXX-XXXX" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                <Button onClick={handleCadastrarCliente} style={{ width: '100%' }}>Cadastrar</Button>
            </FormWrapper>

            <Button style={{ display: 'block', margin: '20px auto', maxWidth: '300px' }}>Verificar clientes cadastrados</Button>
        </PageContainer>
    );
}

export default ClientsPage;
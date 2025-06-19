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
    max-width: 600px;
    margin: 0 auto;
`;

const Title = styled.h2`
    color: #A0522D;
    margin-bottom: 25px;
    text-align: center;
`;

const ProductItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 15px;
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

const QuantityControl = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    flex: 1;
`;

const QuantityButton = styled.button`
    background-color: #A0522D;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 1.2em;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`;

const QuantityDisplay = styled.span`
    min-width: 30px;
    text-align: center;
    font-weight: bold;
`;

const RemoveButton = styled(Button)`
    background-color: #dc3545;
    &:hover {
        background-color: #c82333;
    }
`;

const AddProductButton = styled(Button)`
    width: 100%;
    margin-top: 20px;
`;

function ProductRegistrationPage({ isSidebarOpen }) {
    const [products, setProducts] = useState([
        { id: 1, name: 'Biscoito de Polvilho', quantity: 10, price: 10.00, validity: 'XX/XXXXXX' }
    ]);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');
    const [newProductValidity, setNewProductValidity] = useState('');

    const handleQuantityChange = (id, delta) => {
        setProducts(products.map(p =>
            p.id === id ? { ...p, quantity: Math.max(0, p.quantity + delta) } : p
        ));
    };

    const handleRemoveProduct = (id) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const handleAddNewProduct = () => {
        if (newProductName && newProductPrice && newProductValidity) {
            const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
            setProducts([
                ...products,
                {
                    id: newId,
                    name: newProductName,
                    quantity: 0,
                    price: parseFloat(newProductPrice),
                    validity: newProductValidity
                }
            ]);
            setNewProductName('');
            setNewProductPrice('');
            setNewProductValidity('');
        } else {
            alert('Por favor, preencha todos os campos do novo produto.');
        }
    };

    return (
        <PageContainer isSidebarOpen={isSidebarOpen}>
            <h1>Cadastro de Produtos</h1>
            <FormWrapper>
                {products.map(product => (
                    <ProductItem key={product.id}>
                        <div style={{ flex: '2 1 auto' }}>
                            <p><strong>Nome do Produto:</strong> {product.name}</p>
                            <p><strong>R${product.price.toFixed(2)}</strong></p>
                        </div>
                        <QuantityControl>
                            <p>Quantidade: </p>
                            <QuantityButton onClick={() => handleQuantityChange(product.id, -1)}>-</QuantityButton>
                            <QuantityDisplay>{product.quantity}</QuantityDisplay>
                            <QuantityButton onClick={() => handleQuantityChange(product.id, 1)}>+</QuantityButton>
                        </QuantityControl>
                        <div style={{ flex: '1 1 auto', textAlign: 'right' }}>
                            <p>Validade: {product.validity}</p>
                            <RemoveButton onClick={() => handleRemoveProduct(product.id)}>remover</RemoveButton>
                        </div>
                    </ProductItem>
                ))}

                <h3>Adicionar novo cadastro</h3>
                <InputField
                    label="Nome do Novo Produto"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    placeholder="Ex: Bolo de Chocolate"
                />
                <InputField
                    label="Preço (R$)"
                    type="number"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                    placeholder="Ex: 25.50"
                    step="0.01"
                />
                <InputField
                    label="Validade (MM/AAAA)"
                    value={newProductValidity}
                    onChange={(e) => setNewProductValidity(e.target.value)}
                    placeholder="MM/AAAA"
                />
                <AddProductButton onClick={handleAddNewProduct}>
                    Cadastrar
                </AddProductButton>
            </FormWrapper>
        </PageContainer>
    );
}

export default ProductRegistrationPage;
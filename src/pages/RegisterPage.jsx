import React, { useState } from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 80px);
    background-color: #f8f5f0;
    padding: 20px;
`;

const FormWrapper = styled.div`
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

const Title = styled.h2`
    color: #A0522D;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    color: #666;
    margin-bottom: 30px;
    font-size: 0.95em;
`;

const CheckboxGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: flex-start;
`;

const StyledLink = styled(Link)`
    color: #A0522D;
    text-decoration: none;
    margin-top: 15px;
    display: block;

    &:hover {
        text-decoration: underline;
    }
`;

function RegisterPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyCode, setCompanyCode] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [companyCodeError, setCompanyCodeError] = useState('');

    const navigate = useNavigate();

    const validateFullName = (val) => {
        if (!val) return 'Nome Completo é obrigatório.';
        return '';
    };

    const validateEmail = (val) => {
        if (!val) return 'Email é obrigatório.';
        if (!/\S+@\S+\.\S+/.test(val)) return 'Email inválido.';
        return '';
    };

    const validatePassword = (val) => {
        if (!val) return 'Senha é obrigatória.';
        if (val.length < 6) return 'A senha deve ter no mínimo 6 caracteres.';
        return '';
    };

    const validateCompanyCode = (val) => {
        if (!val) return 'Código da Empresa é obrigatório.';
        return '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameErr = validateFullName(fullName);
        const emailErr = validateEmail(email);
        const passErr = validatePassword(password);
        const codeErr = validateCompanyCode(companyCode);

        setFullNameError(nameErr);
        setEmailError(emailErr);
        setPasswordError(passErr);
        setCompanyCodeError(codeErr);

        if (!nameErr && !emailErr && !passErr && !codeErr) {
            console.log('Dados de cadastro:', { fullName, email, password, companyCode });
            alert('Conta criada com sucesso (simulado)! Redirecionando para o login...');
            navigate('/');
        }
    };

    return (
        <PageContainer>
            <FormWrapper>
                <Title>Bem-Vindo(a)!</Title>
                <Subtitle>Faça parte da família BH Biscoitos</Subtitle>

                <form onSubmit={handleSubmit}>
                    <InputField
                        label="Nome Completo"
                        type="text"
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value); setFullNameError(''); }}
                        onBlur={(e) => setFullNameError(validateFullName(e.target.value))}
                        error={fullNameError}
                        placeholder="Seu nome completo"
                    />
                    <InputField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                        onBlur={(e) => setEmailError(validateEmail(e.target.value))}
                        error={emailError}
                        placeholder="seu.email@exemplo.com"
                    />
                    <InputField
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setPasswordError(''); }}
                        onBlur={(e) => setPasswordError(validatePassword(e.target.value))}
                        error={passwordError}
                        placeholder="******"
                    />
                    <InputField
                        label="Código da Empresa"
                        type="text"
                        value={companyCode}
                        onChange={(e) => { setCompanyCode(e.target.value); setCompanyCodeError(''); }}
                        onBlur={(e) => setCompanyCodeError(validateCompanyCode(e.target.value))}
                        error={companyCodeError}
                        placeholder="ABC-123"
                    />

                    <CheckboxGroup>
                        <input type="checkbox" id="notRobotRegister" />
                        <label htmlFor="notRobotRegister">Não sou um robô</label>
                    </CheckboxGroup>

                    <Button type="submit" style={{ width: '100%', marginBottom: '10px' }}>
                        Cadastrar
                    </Button>
                </form>

                <StyledLink to="/">Já tenho conta</StyledLink>
            </FormWrapper>
        </PageContainer>
    );
}

export default RegisterPage;
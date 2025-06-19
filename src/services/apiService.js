const simulateDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const dashboardData = {
    pedidosDoDia: 78,
    maisVendido: 'Biscoito de Polvilho',
    historicoPedidos: [
        { produto: 'Bolo de Milho', quantidade: 10, preco: 15.00, dataHora: '15/05/2025 - 08:30' },
        { produto: 'Pão de Grãos', quantidade: 15, preco: 15.00, dataHora: '15/05/2025 - 10:40' },
        { produto: 'Biscoito de Polvilho', quantidade: 39, preco: 15.00, dataHora: '15/05/2025 - 12:05' },
        { produto: 'Biscoito de Goiaba', quantidade: 10, preco: 12.00, dataHora: '15/05/2025 - 14:10' },
        { produto: 'Bolo de Laranja', quantidade: 4, preco: 16.00, dataHora: '15/05/2025 - 18:40' }
    ]
};

export const getPedidosSimulados = async () => {
    await simulateDelay(500);
    return { success: true, data: dashboardData };
};

export const getProdutosSimulados = async () => {
    await simulateDelay(300);
    const produtos = [
        { id: 1, name: 'Biscoito de Polvilho', price: 10.00, quantity_stock: 50 },
        { id: 2, name: 'Bolo de Laranja', price: 16.00, quantity_stock: 15 },
        { id: 3, name: 'Pão de Grãos', price: 15.00, quantity_stock: 30 },
    ];
    return { success: true, data: produtos };
};

export const cadastrarItemSimulado = async (itemData) => {
    await simulateDelay(700);
    console.log('Simulando cadastro:', itemData);
    if (itemData.name === 'Erro no Cadastro') {
        return { success: false, message: 'Falha simulada no cadastro.' };
    }
    return { success: true, data: { id: Date.now(), ...itemData }, message: 'Item cadastrado com sucesso!' };
};
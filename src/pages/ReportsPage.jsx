import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

// Registrando os componentes da Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    ChartDataLabels,
    Legend
);
import styled from 'styled-components';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            datalabels: {
                formatter: (value, ctx) => {
                    const datapoints = ctx.chart.data.datasets[0].data;
                    const total = datapoints.reduce((total, datapoint) => total + datapoint, 0);

                    return total
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: 10,
                }
            }

        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    const optionsPie = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Gráfico de Pizza',
                font: {
                    size: 16
                }
            },
            datalabels: {
                // Função para formatar o valor
                formatter: (value, ctx) => {
                    // Acessa todos os dados do gráfico
                    const datapoints = ctx.chart.data.datasets[0].data;
                    // Soma todos os valores para obter o total
                    const total = datapoints.reduce((total, datapoint) => total + datapoint, 0);
                    // Calcula a porcentagem
                    const percentage = (value / total) * 100;
                    // Retorna a string formatada
                    return percentage.toFixed(2) + "%";
                },
                color: '#fff', // Cor do texto
                font: {
                    weight: 'bold',
                    size: 7,
                }
            }
        },
    };
    const labels = [''];

    const data = {
        labels,
        datasets: [
            {
                label: 'Bolos',
                data: labels.map(() => 1900),
                backgroundColor: '#FFB800',
                borderColor: 'rgba(216, 58, 92, 0.6)',
                borderWidth: 0,
            },
            {
                label: 'Pães',
                data: labels.map(() => 2500),
                backgroundColor: '#884D2F',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                borderWidth: 0,
            },
            {
                label: 'Biscoitos',
                data: labels.map(() => 4050),
                backgroundColor: '#A0A0A0',
                borderColor: 'rgba(255, 99, 132, 0.6)',
                borderWidth: 0,
            },
        ],
    };


    const dataPie = {
        // As etiquetas para cada fatia da pizza
        labels: ['Pix', 'Dinheiro', 'Cartão'],
        datasets: [
            {
                label: '%',
                // Os valores numéricos para cada fatia
                data: [12.5, 62.5, 25],
                // Um array de cores, uma para cada fatia
                backgroundColor: [
                    '#FFB800',
                    '#884D2F',
                    '#A0A0A0',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 0,
            },
        ],
    };


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
                    <Bar options={options} data={data} />
                </ChartPlaceholder>
            </ChartContainer>

            <ChartContainer>
                <StatTitle>Formas de Pagamento</StatTitle>
                <ChartPlaceholder>
                    <Pie options={optionsPie} data={dataPie} />

                </ChartPlaceholder>
            </ChartContainer>
        </PageContainer>
    );
}

export default ReportsPage;
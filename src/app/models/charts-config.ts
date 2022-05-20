import {
    Chart, BarElement, LinearScale, BarController, CategoryScale,
    ChartData, Tooltip, Title, DoughnutController, ArcElement, Legend, ChartConfiguration, DefaultDataPoint, Plugin
  } from 'chart.js';

export const optionsPieChart: any =
{
    responsive: true,
    cutout: 40,
    plugins: {
        title: {
            display: true,
            text: 'Encuestas analizadas',
            font: {
                family: 'Gothic',
                weight: '800',
                size: 10
            },
        },
        tooltip: {
            callbacks: {
                label: (context: any) => {
                    let dataX = context.dataset.data[context.dataIndex].toString() || '';
                    const label = context.label || '';

                    if (label) {

                        dataX = ` ${label}: ${dataX}%`;
                    }
                    return dataX;
                }
            }
        },
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                font: {
                    family: 'Gothic',
                    weight: '800',
                    size: 10
                }
            }
        }

    }
}

export const optionsBarChart: any ={
    indexAxis: 'y',
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          font: {
            family: 'Gothic',
            weight: '800',
            size: 10
          }
        }
      },

    },
    scales: {
      xAxis: {
        
        ticks: {
          font: {
            family: 'Gothic',
            weight: '800',
            size: 10
          }
        },
        grid: {
          display: false
        }
      },
      yAxis: {
        
        ticks: {
          font: {
            family: 'Gothic',
            weight: '800',
            size: 10
          }
        },
        grid: {
          display: false
        },
      }
    }
  }
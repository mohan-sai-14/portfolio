import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const SkillRadarChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance to prevent memory leaks
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: ['Financial', 'Programming', 'Business', 'Analytics', 'Communication'],
            datasets: [{
              label: 'Skills',
              data: [85, 70, 90, 75, 80],
              backgroundColor: 'rgba(0, 245, 160, 0.2)',
              borderColor: '#00F5A0',
              pointBackgroundColor: '#00F5A0',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: '#00F5A0'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 3
              }
            },
            scales: {
              r: {
                angleLines: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)'
                },
                pointLabels: {
                  color: 'rgba(255, 255, 255, 0.7)',
                  font: {
                    family: "'Inter', sans-serif",
                    size: 12
                  }
                },
                ticks: {
                  backdropColor: 'transparent',
                  color: 'rgba(255, 255, 255, 0.7)',
                  font: {
                    family: "'Inter', sans-serif",
                    size: 10
                  }
                }
              }
            },
            plugins: {
              legend: {
                display: false
              }
            }
          }
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default SkillRadarChart;

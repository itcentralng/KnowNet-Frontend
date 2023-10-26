import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  PointElement
);

export function BarChart() {
  return (
    <Bar
      data={{
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Total Usage",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "#000",
            data: [150, 250, 200, 335, 250, 220, 400, 230, 500],
            maxBarThickness: 6,
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 500,
              beginAtZero: true,
              padding: 15,
              font: {
                size: 14,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
              color: "#fff",
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}

// export function LineChart() {
//   return (
//     <Line
//       data={{
//         labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [
//           {
//             label: "Users",
//             tension: 0.4,
//             borderWidth: 1,
//             borderRadius: 4,
//             borderSkipped: false,
//             borderColor: "darkred",
//             data: [150, 200, 100, 220, 300, 100, 200, 230, 300],
//             maxBarThickness: 6,
//           },
//           {
//             label: "Bacis users",
//             tension: 0.4,
//             borderWidth: 1,
//             borderRadius: 4,
//             borderSkipped: false,
//             borderColor: "lime",
//             data: [350, 200, 200, 320, 500, 300, 400, 300, 500],
//             maxBarThickness: 6,
//           },
//         ],
//       }}
//       options={{
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             display: false,
//           },
//         },
//         interaction: {
//           intersect: false,
//           mode: "index",
//         },
//         scales: {
//           y: {
//             grid: {
//               drawBorder: false,
//               display: false,
//               drawOnChartArea: false,
//               drawTicks: false,
//             },
//             ticks: {
//               suggestedMin: 0,
//               suggestedMax: 500,
//               beginAtZero: true,
//               padding: 15,
//               font: {
//                 size: 14,
//                 family: "Open Sans",
//                 style: "normal",
//                 lineHeight: 2,
//               },
//               color: "#111",
//             },
//           },
//           x: {
//             grid: {
//               drawBorder: false,
//               display: false,
//               drawOnChartArea: false,
//               drawTicks: false,
//             },
//           },
//         },
//       }}
//     />
//   );
// }

export function DoughnutChart() {
  <Doughnut
    data={{
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
        {
          label: "Sales",
          tension: 0.4,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
          borderColor: "darkred",
          data: [150, 200, 100, 220, 300, 100, 200, 230, 300],
          maxBarThickness: 6,
        },
        {
          label: "Sales",
          tension: 0.4,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false,
          borderColor: "lime",
          data: [350, 200, 200, 320, 500, 300, 400, 300, 500],
          maxBarThickness: 6,
        },
      ],
    }}
    options={{
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 15,
            font: {
              size: 14,
              family: "Open Sans",
              style: "normal",
              lineHeight: 2,
            },
            color: "#111",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
        },
      },
    }}
  />;
}

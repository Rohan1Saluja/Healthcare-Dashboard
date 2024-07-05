export const getLineGraphData = (diagnosis: any, timeFrame: number) => {
  if (!diagnosis || diagnosis.length === 0) return null;

  const labels: Array<string> = diagnosis
    .map((reportElem: any) => {
      const label = `${reportElem.month.slice(0, 3)}, ${reportElem.year}`;
      return label;
    })
    .slice(-timeFrame);

  const datasets = [
    {
      label: "Systolic",
      data: diagnosis
        .map((reportElem: any) => reportElem.blood_pressure.systolic.value)
        .slice(-timeFrame),
      fill: false,
      borderColor: "#E66FD2",
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: "#E66FD2",
    },
    {
      label: "Diastolic",
      data: diagnosis
        .map((reportElem: any) => reportElem.blood_pressure.diastolic.value)
        .slice(-timeFrame),
      fill: false,
      borderColor: "#8C6FE6",
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: "#8C6FE6",
    },
  ];

  return { labels, datasets };
};

//Graph Elements

export const getGraphScales = (graphData: any) => {
  const scales = {
    x: {
      grid: {
        display: false, // Remove vertical grid lines
      },
    },
    y: {
      suggestedMax: graphData?.datasets[0]?.data
        ? Math.max(...graphData.datasets[0].data) * 1.1
        : undefined, // Add 10% extra space
      ticks: {
        stepSize: 20,
      },
    },
  };
  return scales;
};

export const getGraphPlugins = () => {
  const plugins = {
    legend: {
      display: false, // Show or hide the legend
      labels: {
        color: "#333", // Color of the text
        font: {
          size: 14, // Font size of the text
        },
        usePointStyle: true, // Use point style for legend items
        boxWidth: 8, // Width of the color box
        boxHeight: 8, // Height of the color box
        padding: 20, // Padding around the legend items
      },
    },
    tooltip: {
      callbacks: {
        label: function (context: any) {
          // Custom tooltip label
          return `${context.dataset.label}: ${context.raw}`;
        },
      },
    },
  };
  return plugins;
};

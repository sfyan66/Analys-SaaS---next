"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const UserGrowth = () => {
  return (
    <ReactApexChart
      type="area"
      series={[
        {
          name: "Users",
          data: [2120, 2250, 2180, 2270, 2220, 2300, 2220, 2350],
        },
      ]}
      options={{
        chart: {
          sparkline: { enabled: false },
          background: "transparent",
          toolbar: { show: false },
        },
        stroke: { curve: "smooth", width: 3 },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#7A8BFF"],
            stops: [0, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
          colors: ["#4F66FF"],
          strokeColors: "#fff",
          strokeWidth: 2,
        },
        tooltip: {
          theme: "dark",
          x: { show: false },
          y: { formatter: (val) => `${val} Users` },
        },
        grid: {
          borderColor: "#222",
          row: { colors: ["transparent"], opacity: 0.2 },
        },
        colors: ["#4F66FF"],
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: { style: { colors: "#E5E7EB" } },
        },
        yaxis: {
          labels: { style: { colors: "#E5E7EB" } },
          min: 2000,
          max: 2400,
        },
      }}
      height={250}
    />
  );
};

export default UserGrowth;

"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const UsersGrowthBar = () => {
  const categories = ["Desktop", "Mobile", "Other"];

  const lastMonthData = [3000, 2500, 500];
  const thisMonthData = [8000, 6000, 2500];

  const options: ApexOptions = {
    chart: {
      type: "bar",
      stacked: false,
      toolbar: { show: false },
      dropShadow: { enabled: true, top: 2, left: 2, blur: 4, opacity: 0.3 },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 6,
      },
    },
    colors: ["#7EB0FF", "#4F66FF"],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toLocaleString(),
      style: { colors: ["#fff"], fontSize: "14px" },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#7EB0FF", "#7A8BFF"],
        stops: [0, 100],
      },
    },
    xaxis: {
      categories,
      labels: { style: { colors: "#fff" } },
    },
    yaxis: {
      labels: { style: { colors: "#fff" } },
      title: { text: "Users", style: { color: "#fff" } },
    },
    legend: {
      labels: {
        colors: "#E9EAEB",
      },
      position: "top",
      horizontalAlign: "left",
      markers: {
        shape: "circle",
        size: 4,
        strokeWidth: 0,
        offsetX: -4,
      },
    },
    title: {
      text: "Users Growth by Platform",
      style: { color: "#fff", fontSize: "16px", fontWeight: 600 },
    },
  };

  const series = [
    { name: "Last Month", data: lastMonthData },
    { name: "This Month", data: thisMonthData },
  ];

  return (
    <div className="bg-white/3 backdrop-blur-md p-6 card w-full max-w-[450px] xl:ml-auto h-[450px]">
      <h3 className="text-white text-xl font-semibold mb-1">Users Growth</h3>
      <p className="text-gray-300 text-sm mb-6">
        User base growth compared to last month across Desktop, Mobile, and
        Other platforms
      </p>
      <ReactApexChart
        type="bar"
        options={options}
        series={series}
        height={330}
      />
    </div>
  );
};

export default UsersGrowthBar;

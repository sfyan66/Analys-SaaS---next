"use client";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
import React from "react";

const UserSession = () => {
  return (
    <ReactApexChart
      type="bar"
      height={250}
      series={[
        {
          name: "Desktop",
          data: [1680, 1820, 1460, 1800, 1740, 1910, 1990], // example
        },
        {
          name: "Mobile",
          data: [1340, 1580, 1120, 1660, 1590, 1170, 1720], // example
        },
      ]}
      options={{
        chart: {
          background: "transparent",
          toolbar: { show: false },
          fontFamily: "Outfit, sans-serif",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%", // smaller bars
            borderRadius: 4,
          },
        },
        colors: ["#4F66FF", "#7EB0FF"], // Desktop = blue, Mobile = light blue
        dataLabels: { enabled: false },
        grid: {
          borderColor: "rgba(255,255,255,0.08)",
        },
        stroke: {
          width: 2,
          colors: ["transparent"],
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
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          labels: {
            style: { colors: "#E5E7EB" },
          },
        },
        yaxis: {
          labels: {
            style: { colors: "#E5E7EB" },
          },
        },
        tooltip: {
          theme: "dark",
        },
        responsive: [
          {
            breakpoint: 640, // mobile
            options: {
              plotOptions: {
                bar: {
                  columnWidth: "45%", // slightly bigger for mobile spacing
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      }}
    />
  );
};

export default UserSession;

"use client";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlyTarget() {
  const series = [80.76];
  const options: ApexOptions = {
    colors: ["#4F66FF"], // main color
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "area",
      height: 330,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 6,
        opacity: 0.3, // subtle glow on dark background
      },
    },

    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "75%",
          background: "#000", // inner circle color (dark)
        },

        track: {
          background: "rgba(255,255,255,.08)", // soft thin white for dark mode
          strokeWidth: "100%",
          margin: 5,
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "26px",
            fontWeight: "600",
            offsetY: -30,
            color: "#E5E7EB", // light text for dark mode
            formatter: (val) => `${val}%`,
          },
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#7A8BFF"], // lighter end of gradient
        stops: [0, 100],
      },
    },

    stroke: {
      lineCap: "round",
    },

    labels: ["Progress"],
  };

  return (
    <div className="card dark:bg-white/3 xl:max-w-[400px] ">
      <div className="px-5 pt-5 bg- pb-11 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Monthly Target</h3>
            <p className="mt-1 font-normal text-secondary text-sm">
              Target you’ve set for each month
            </p>
          </div>
        </div>
        <div className="relative ">
          <div className="max-h-[350px]">
            <ReactApexChart
              options={options}
              series={series}
              type="radialBar"
              height={300}
            />
          </div>
          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] rounded-full bg-success-50 px-3 py-1 text-xs font-medium text-green-600 dark:bg-success-500/15 dark:text-success-500">
            +20%
          </span>
        </div>
        <p className="mx-auto mt-10 w-full max-w-[380px] text-center text-sm text-secondary sm:text-base">
          You earn $6180 today, it&apos;s higher than last month. Keep up your
          good work!
        </p>
      </div>
    </div>
  );
}

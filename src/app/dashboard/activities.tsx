"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
  { month: "January", desktop: 68000, mobile: 80 },
  { month: "February", desktop: 60000, mobile: 200 },
  { month: "March", desktop: 40000, mobile: 120 },
  { month: "April", desktop: 32000, mobile: 190 },
  { month: "May", desktop: 55000, mobile: 130 },
  { month: "June", desktop: 76000, mobile: 140 },
  { month: "July", desktop: 22000, mobile: 140 },
  { month: "August", desktop: 45000, mobile: 140 },
  { month: "September", desktop: 24000, mobile: 140 },
  { month: "October", desktop: 76000, mobile: 140 },
  { month: "November", desktop: 90000, mobile: 140 },
  { month: "December", desktop: 34000, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Activities",
    color: "#0081FE",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export const Activities = () => {
  return (
    <Card className="shadow-none border-none rounded-2xl w-full max-w-[606px]">
      <CardHeader>
        <CardTitle className="text-[#242424] ml-18 mb-2">Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid stroke="#F0F0F0" strokeDasharray="0 0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              interval={0}
              tick={({ x, y, payload }) => (
                <text x={x + 9} y={y + 9} textAnchor="end" fill="#666">
                  {payload.value.slice(0, 3)}
                </text>
              )}
            />
            <YAxis
              dataKey="desktop"
              //   tickLine={false}
              tickCount={6}
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => {
                const value = payload.value.toString();

                return (
                  <text x={x + 5} y={y + 1} textAnchor="end" fill="#666">
                    {value === "0"
                      ? value
                      : `${value.slice(0, value.length - 3)}k`}
                  </text>
                );
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

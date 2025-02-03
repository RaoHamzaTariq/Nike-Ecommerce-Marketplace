"use client";

import React, { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Order } from "@/data/interfaces";

// Helper function to group sales by month

export function SalesLineChart({ ordersData }:{ordersData:Order[]}) {


  const groupSalesByMonth = (ordersData: Order[]) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const salesByMonth:{
      [key: string]: number
    } = {};
  
    ordersData.forEach((order:Order) => {
      const date = new Date(order.orderDate);
      const month = months[date.getMonth()];
      if (!salesByMonth[month]) {
        salesByMonth[month] = 0;
      }
      salesByMonth[month] += order.paymentStatus === "paid" ? order.totalAmount : 0;
    });
  
    return months.map((month) => ({
      month,
      sales: salesByMonth[month] || 0, // Default to 0 if no sales for that month
    }));
  };
  
  // Process order data to calculate monthly sales
  const chartData = useMemo(() => groupSalesByMonth(ordersData), [ordersData]);

  // Chart configuration for sales
  const chartConfig = {
    sales: {
      label: "Sales",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <Card className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg">
      <CardHeader>
        <CardTitle>Sales Trends</CardTitle>
        <CardDescription>Monthly Sales Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: -10,
              bottom: 5,
            }}
            width={600} // Set a specific width for larger screens
            height={300} // Set a specific height for the chart
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Shorten month names
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`} // Format Y-axis values with dollar sign
            />
            <Tooltip content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="sales"
              type="natural"
              stroke="var(--color-sales)" // Use a variable for color
              strokeWidth={2}
              dot={{
                fill: "var(--color-sales)",
                strokeWidth: 2,
                r: 4, // Size of the dot
              }}
              activeDot={{
                r: 6, // Size of the active dot
                strokeWidth: 2,
                stroke: "#fff", // Active dot stroke color
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by{" "}
          {(
            ((chartData[chartData.length - 1]?.sales -
              chartData[chartData.length - 2]?.sales) /
              (chartData[chartData.length - 2]?.sales || 1)) *
            100
          ).toFixed(1)}
          % this month
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales for the last six months.
        </div>
      </CardFooter>
    </Card>
  );
}





import { Label, Pie, PieChart } from "recharts";






// Helper function to calculate sales by category
const calculateSalesByCategory = (orders: Order[]) => {
  const categorySales: Record<string, number> = {}; // Use Record for dynamic keys

  orders.forEach((order) => {
    order.productDetails.forEach((product) => {
      const category = product.productCategory || "Other"; // Default to "Other" if no category is provided
      if (!categorySales[category]) {
        categorySales[category] = 0;
      }
      categorySales[category] += product.quantity * product.productPrice; // Calculate total sales for the category
    });
  });

  // Convert the object into an array suitable for Recharts
  return Object.keys(categorySales).map((category) => ({
    category,
    sales: categorySales[category],
    fill: `var(--color-${category.toLowerCase().replace(/\s+/g, "-")})`, // Dynamically generate fill color
  }));
};

export function SalesPieChart({ ordersData }: {ordersData:Order[]}) {
  const chartData = React.useMemo(() => calculateSalesByCategory(ordersData), [ordersData]);

  const totalSales = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.sales, 0);
  }, [chartData]);

  return (
    <Card className="flex flex-col w-full  md:w-3/4 lg:w-2/3 xl:w-1/2 shadow-lg">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sales Distribution</CardTitle>
        <CardDescription>Category-wise Sales Overview</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer className="mx-auto aspect-square max-h-[400px]" config={{
    sales: {
      label: "Sales",
    },
  }}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="category"
              innerRadius={80}
              outerRadius={150}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          ${totalSales.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Total Sales
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by{" "}
          {((chartData[0]?.sales - chartData[1]?.sales) / (chartData[1]?.sales || 1) * 100).toFixed(1)}%
          this month{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total sales distribution by categories.
        </div>
      </CardFooter>
    </Card>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DollarSign,
  ShoppingCart,
  PackageOpen,
  CheckCircle,
} from "lucide-react";
import { calculateTotalPaidAmount } from "@/lib/orderUtils";
import {
  OrderDetailsDialog,
  OrderStatusBadge,
} from "@/components/admin-dashboard-component";
import { Button } from "@/components/ui/button";
import { Order } from "@/data/interfaces";
import Loading from "@/components/ui/loading";
import { motion } from "framer-motion";
import { SalesLineChart, SalesPieChart } from "@/components/ui/admin-charts";
import { useUser } from "@clerk/nextjs";
import {useRouter} from "next/navigation";

export interface ProductDetail {
  quantity: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productSubtotal: number;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);
  const {user, isLoaded } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && user?.publicMetadata.role !== "admin") {
      console.log(user?.publicMetadata.role);
      router.push('/unauthorized');
    }
  }, [isLoaded, user, router]);

  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalQuantitySold: 0,
  });

  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {

    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/order`
        );
        const data = await response.json();
        setOrders(data.data);

        const calculatedStats = {
          totalRevenue: data.data.reduce(
            (total: number, order: Order) =>
              total + calculateTotalPaidAmount(order),
            0
          ),
          totalOrders: data.data.length,
          pendingOrders: data.data.filter(
            (order: Order) => order.orderStatus === "pending"
          ).length,
          completedOrders: data.data.filter(
            (order: Order) => order.orderStatus === "completed"
          ).length,
          totalQuantitySold: data.data.reduce(
            (total: number, order: Order) =>
              total +
              order.productDetails.reduce(
                (qty: number, product: ProductDetail) => qty + product.quantity,
                0
              ),
            0
          ),
        };

        setStats(calculatedStats);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const handleOrderView = (order: Order) => {
    setSelectedOrder(order);
    setIsOrderDetailOpen(true);
  };

  if (isLoading) {
    return <Loading type="admin-dashboard" />;
  }

  return (
    <div className="container mx-auto p-4 md:p-6">
      <header className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">Admin Dashboard</h1>
        <Button variant="default" className="mt-4 md:mt-0 px-6 py-2">
          Add New Order
        </Button>
      </header>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Revenue",
            value: `PKR ${stats.totalRevenue.toFixed(2)}`,
            icon: <DollarSign className="h-8 w-8 text-green-500" />,
            bgColor: "bg-gradient-to-r from-green-400 to-green-600 text-white",
          },
          {
            title: "Total Orders",
            value: stats.totalOrders,
            icon: <ShoppingCart className="h-8 w-8 text-blue-500" />,
            bgColor: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
          },
          {
            title: "Pending Orders",
            value: stats.pendingOrders,
            icon: <PackageOpen className="h-8 w-8 text-yellow-500" />,
            bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
          },
          {
            title: "Quantity Sold",
            value: stats.totalQuantitySold,
            icon: <CheckCircle className="h-8 w-8 text-purple-500" />,
            bgColor: "bg-gradient-to-r from-purple-400 to-purple-600 text-white",
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className={`shadow-lg ${stat.bgColor} rounded-xl p-4`}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-semibold">{stat.title}</CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
  {orders.length > 0 ? (
    orders.map((order) => (
      <TableRow key={order._id}>
        <TableCell>{order._id}</TableCell>
        <TableCell>{order.customerName}</TableCell>
        <TableCell>{order.totalAmount}</TableCell>
        <TableCell>
          <OrderStatusBadge status={order.orderStatus} />
        </TableCell>
        <TableCell>
          <Button variant="outline" size="sm" onClick={() => handleOrderView(order)}>
            View Details
          </Button>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={5} className="text-center py-4 text-gray-500">
        No orders available.
      </TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>

        {selectedOrder && (
          <OrderDetailsDialog
            order={selectedOrder}
            open={isOrderDetailOpen}
            onClose={() => setIsOrderDetailOpen(false)}
          />
        )}
      </div>

      {/* Line Charts Section */}
      <div className="my-6 flex flex-col md:flex-row gap-5 ">
        <SalesLineChart  ordersData={orders}/>
        <SalesPieChart  ordersData={orders}/>
      </div>

    </div>
  );
}

"use client";
import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DollarSign, 
  ShoppingCart, 
  PackageOpen, 
  CheckCircle 
} from "lucide-react";
import { calculateTotalAmount, calculateTotalPaidAmount } from '@/lib/orderUtils';
import { OrderDetailsDialog, OrderStatusBadge } from '@/components/admin-dashboard-component';
import { Button } from '@/components/ui/button';

// interfaces/order.ts
export interface ProductDetail {
  quantity: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productSubtotal: number;
}

export interface Order {
  _id: string;
  customerName: string;
  customer_id: string;
  email: string;
  completionStatus: 'pending' | 'processing' | 'completed' | 'cancelled';
  orderDate: string;
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  productDetails: ProductDetail[];
}







// pages/admin/orders/index.tsx
export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);

   // New state for statistics
   const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalQuantitySold: 0
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order`);
        const data = await response.json();
        setOrders(data.data);

        // Calculate statistics
        const calculatedStats = {
          totalRevenue: data.data.reduce((total: number, order:Order) => 
            total + calculateTotalPaidAmount(order), 0),
          totalOrders: data.data.length,
          pendingOrders: data.data.filter((order:Order) => order.completionStatus === 'pending').length,
          completedOrders: data.data.filter((order:Order) => order.completionStatus === 'completed').length,
          totalQuantitySold: data.data.reduce((total:number, order:Order) => 
            total + order.productDetails.reduce((qty:number, product:ProductDetail) => qty + product.quantity, 0), 0)
        };

        setStats(calculatedStats);
        
      } catch (error) {
        console.error('Failed to fetch orders', error);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderView = (order: Order) => {
    setSelectedOrder(order);
    setIsOrderDetailOpen(true);
  };

  return (
    <div className="container  mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>

{/* Statistics Cards */}
<div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              PKR {stats.totalRevenue.toFixed(2)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            <PackageOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pendingOrders}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Quantity Sold</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalQuantitySold}</div>
          </CardContent>
        </Card>
      </div>


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
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell>{order._id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>
                {calculateTotalAmount(order.productDetails)}
              </TableCell>
              <TableCell>
                <OrderStatusBadge status={order.completionStatus} />
              </TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  onClick={() => handleOrderView(order)}
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
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
  );
}

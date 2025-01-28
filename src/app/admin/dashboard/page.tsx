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


import { calculateTotalAmount } from '@/lib/orderUtils';
import { OrderStatusBadge } from '@/components/orderStatusBadge';
import { OrderDetailsDialog } from '@/components/orderDetailDialog';
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

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/order`);
        const data = await response.json();
        setOrders(data.data);
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

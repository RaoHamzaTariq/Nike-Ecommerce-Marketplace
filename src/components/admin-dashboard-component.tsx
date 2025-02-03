import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Badge } from "./ui/badge";
import { Order } from "@/data/interfaces";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { calculateTotalAmount } from "@/lib/orderUtils";
import { motion } from "framer-motion";

export const OrderDetailsDialog = ({ 
  order, 
  open, 
  onClose 
}: { 
  order: Order, 
  open: boolean, 
  onClose: () => void 
}) => {
  const totalAmount = calculateTotalAmount(order.productDetails);

  return (
      <Dialog open={open} onOpenChange={onClose}>
          <DialogContent className="max-w-4xl bg-opacity-90 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-gray-800">
              <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">
                      Order Details #{order._id}
                  </DialogTitle>
              </DialogHeader>
              
              <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 gap-6 text-white"
              >
                  {/* Order Information Card */}
                  <Card className="bg-gray-900 shadow-md border border-gray-800">
                      <CardHeader>
                          <CardTitle className="text-lg text-white">Order Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                          <p><strong>Customer:</strong> {order.customerName}</p>
                          <p><strong>Email:</strong> {order.email}</p>
                          <p><strong>Phone:</strong> {order.phoneNumber}</p>
                          <p><strong>Address:</strong> {order.addressDetail.fullAddress}, {order.addressDetail.city}, {order.addressDetail.state}</p>
                          <p><strong>Total Amount:</strong> PKR {totalAmount}</p>
                          <p><strong>Status:</strong> <OrderStatusBadge status={order.orderStatus} /></p>
                      </CardContent>
                  </Card>

                  {/* Order Items Card */}
                  <Card className="bg-gray-900 shadow-md border border-gray-800">
                      <CardHeader>
                          <CardTitle className="text-lg text-white">Order Items</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <Table>
                              <TableHeader>
                                  <TableRow>
                                      <TableHead>Product</TableHead>
                                      <TableHead>Quantity</TableHead>
                                      <TableHead>Price</TableHead>
                                      <TableHead>Subtotal</TableHead>
                                  </TableRow>
                              </TableHeader>
                              <TableBody>
                                  {order.productDetails.map((item, index) => (
                                      <TableRow key={index}>
                                          <TableCell>{item.productName}</TableCell>
                                          <TableCell>{item.quantity}</TableCell>
                                          <TableCell>{item.productPrice}</TableCell>
                                          <TableCell>{item.productSubtotal}</TableCell>
                                      </TableRow>
                                  ))}
                              </TableBody>
                          </Table>
                      </CardContent>
                  </Card>
              </motion.div>
          </DialogContent>
      </Dialog>
  );
};

// Order Status Badge
export const OrderStatusBadge = ({ status }: { status: string }) => {
  const statusColors: { [key: string]: string } = {
      pending: 'bg-yellow-400 text-gray-900',
      processing: 'bg-blue-400 text-white',
      completed: 'bg-green-400 text-white',
      cancelled: 'bg-red-400 text-white'
  };

  return (
      <Badge className={`${statusColors[status] || 'bg-gray-400 text-white'} px-3 py-1 rounded-md`}>
          {status}
      </Badge>
  );
};


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const revenueData = [
    { date: '2023-10-01', revenue: 1200 },
    { date: '2023-10-02', revenue: 1500 },
    { date: '2023-10-03', revenue: 800 },
    { date: '2023-10-04', revenue: 2000 },
    { date: '2023-10-05', revenue: 1700 },
];

export const RevenueTrendsChart = () => {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-700">Revenue Trends</CardTitle>
            </CardHeader>
            <CardContent>
                <LineChart width={600} height={300} data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                </LineChart>
            </CardContent>
        </Card>
    );
};
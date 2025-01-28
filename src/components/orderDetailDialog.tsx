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
import { Order } from "@/data/interfaces";
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
  } from "@/components/ui/table";
import { OrderStatusBadge } from "./orderStatusBadge";
import { calculateTotalAmount } from "@/lib/orderUtils";

// components/orders/OrderDetailsDialog.tsx
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
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Order Details #{order._id}</DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-2 text-white gap-6">
            {/* Order Information Card */}
            <Card>
              <CardHeader>
                <CardTitle>Order Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Customer:</strong> {order.customerName}</p>
                  <p>
                    <strong>Total Amount:</strong> 
                    {totalAmount}
                  </p>
                  <p>
                    <strong>Status:</strong> 
                    <OrderStatusBadge status={order.completionStatus} />
                  </p>
                </div>
              </CardContent>
            </Card>
  
            {/* Order Items Card */}
            <Card>
              <CardHeader>
                <CardTitle>Order Items</CardTitle>
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
          </div>
        </DialogContent>
      </Dialog>
    );
  };
  
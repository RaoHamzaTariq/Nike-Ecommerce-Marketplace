import { Badge } from "./ui/badge";

// components/orders/OrderStatusBadge.tsx
export const OrderStatusBadge = ({ status }: { status: string }) => {
    const statusColors: { [key: string]: string } = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
  
    return (
      <Badge 
        className={statusColors[status] || 'bg-gray-100 text-gray-800'}
      >
        {status}
      </Badge>
    );
  };
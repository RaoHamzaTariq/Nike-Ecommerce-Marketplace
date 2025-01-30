import { ProductDetail } from "@/app/admin/dashboard/page";
import { Order } from "@/data/interfaces";

export const calculateTotalAmount = (productDetails: ProductDetail[]) : number => {
    return productDetails.reduce(
      (total, product) => total + (product.productSubtotal || 0), 
      0
    );
  };


export const calculateTotalPaidAmount = (order: Order) : number => {
  return order.paymentStatus==="paid" ? calculateTotalAmount(order.productDetails) : 0;
}
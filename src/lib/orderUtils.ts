import { ProductDetail } from "@/app/admin/dashboard/page";

export const calculateTotalAmount = (productDetails: ProductDetail[]) : number => {
    return productDetails.reduce(
      (total, product) => total + (product.productSubtotal || 0), 
      0
    );
  };
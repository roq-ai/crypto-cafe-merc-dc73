import { CartItemInterface } from 'interfaces/cart-item';
import { OrderItemInterface } from 'interfaces/order-item';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  price: number;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  order_item?: OrderItemInterface[];
  business?: BusinessInterface;
  _count?: {
    cart_item?: number;
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  business_id?: string;
}

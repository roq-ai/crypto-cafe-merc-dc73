const mapping: Record<string, string> = {
  businesses: 'business',
  carts: 'cart',
  'cart-items': 'cart_item',
  orders: 'order',
  'order-items': 'order_item',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
